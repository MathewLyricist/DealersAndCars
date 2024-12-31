package com.webapplication.databaserequests;

import com.webapplication.carshop.Cars;
import com.webapplication.carshop.Dealers;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DataBase {

    public static Connection connectionInDateBase() {

        String jdbcURL = "jdbc:postgresql://localhost:5432/WebWork";
        String username = "postgres";
        String passwordDB = "1234567890";

        Connection connection;

        try {
            Class.forName("org.postgresql.Driver");
            connection = DriverManager.getConnection(jdbcURL, username, passwordDB);
        } catch (ClassNotFoundException | SQLException e) {
            throw new RuntimeException(e);
        }
        return connection;
    }

/*        public static void addCarsInDB(CarsWrapper cars)throws SQLException {
        Statement st = null;
        Connection conection = null;
        try{
            for(Cars car: cars.getCars()){
                String query = "INSERT INTO cars(firm, model, year, power, color, price) VALUES('" + car.getFirm()
                        + "', '" + car.getModel() + "', '" + car.getYear()
                        + "', '" + car.getPower() +  "', '" + car.getColor()
                        + "', '" + car.getPrice() +"');";
                conection = connectionInDateBase();
                st = conection.createStatement();
                st.executeUpdate(query);
                conection.close();
            }
        }catch(SQLException e){
            e.printStackTrace();
        } finally {
            if (st != null) {
                st.close();
            }
            if (conection != null) {
                conection.close();
            }
        }
    }*/

    public static void addANewDealer(Dealers dealer) throws SQLException {
        String query = "INSERT INTO dealers (name, city, address, area, rating) VALUES (?, ?, ?, ?, ?);";

        try (Connection connection = connectionInDateBase();
             PreparedStatement pstmt = connection.prepareStatement(query)) {

            pstmt.setString(1, dealer.getName());
            pstmt.setString(2, dealer.getCity());
            pstmt.setString(3, dealer.getAddress());
            pstmt.setString(4, dealer.getArea());
            pstmt.setDouble(5, dealer.getRating());

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Ошибка добавления дилера: " + e.getMessage(), e);
        }
    }

    public static List<Dealers> getAllDilers() throws SQLException {
            List<Dealers> dealersList = new ArrayList<>();
            String query = "SELECT * FROM dealers";

            try (Connection connection = connectionInDateBase();
                 Statement st = connection.createStatement();
                 ResultSet rs = st.executeQuery(query)) {

                while (rs.next()) {
                    Dealers diller = new Dealers();
                    diller.setName(rs.getString("Name"));
                    diller.setCity(rs.getString("City"));
                    diller.setAddress(rs.getString("Address"));
                    diller.setArea(rs.getString("Area"));
                    diller.setRating(rs.getFloat("Rating"));
                    dealersList.add(diller);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }

            return dealersList; // Возврат списка дилеров
    }

    public static List<Cars> getAllCarsInDiler(Long id) throws SQLException {
        List<Cars> carsList = new ArrayList<>();

        String query = "SELECT cars.carid, cars.firm, cars.model, cars.year, cars.power, cars.color, cars.price " +
                "FROM cars " +
                "JOIN affiliation ON cars.carid = affiliation.carid " +
                "WHERE affiliation.dilerid = ?;";

        try (Connection connection = connectionInDateBase();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setLong(1, id);
            ResultSet rs = preparedStatement.executeQuery();

            while (rs.next()) {
                Cars car = new Cars();
                car.setId(rs.getLong("carid"));
                car.setFirm(rs.getString("Firm"));
                car.setModel(rs.getString("Model"));
                car.setYear(rs.getInt("Year"));
                car.setPower(rs.getInt("Power"));
                car.setColor(rs.getString("Color"));
                car.setPrice(rs.getInt("Price"));
                carsList.add(car);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }


        return carsList; // Возврат списка дилеров
    }

    public static void deleteDealerById(Long id) throws SQLException{
        String query = "DELETE FROM dealers WHERE dealerid = "+id+";";

        Connection connection = connectionInDateBase();
        try{
             Statement st = connection.createStatement();
             st.executeUpdate(query);
             connection.close();
        } catch (SQLException e) {
            e.printStackTrace(); // Обработка исключений
        }
    }

    public static void updateDealer(Long id, Dealers dealer) throws SQLException {
        String query = "UPDATE dealers SET name = ?, city = ?, address = ?, area = ?, rating = ? WHERE dealerid = ?;";

        try (Connection connection = connectionInDateBase();
             PreparedStatement pstmt = connection.prepareStatement(query)) {

            // Устанавливаем параметры запроса
            pstmt.setString(1, dealer.getName());
            pstmt.setString(2, dealer.getCity());
            pstmt.setString(3, dealer.getAddress());
            pstmt.setString(4, dealer.getArea());
            pstmt.setDouble(5, dealer.getRating());
            pstmt.setLong(6, id);

            // Выполняем обновление
            int affectedRows = pstmt.executeUpdate();
            if (affectedRows == 0) {
                System.out.println("Дилер не найден с ID: " + id);
            }
        } catch (SQLException e) {
            e.printStackTrace(); // Обработка исключений
        }
    }

    public static void deleteCarInAffiliation(Long dealerId, Long carId) throws SQLException {
        if (!carExists(carId, dealerId)) {
            throw new SQLException("Запись в affiliation не найдена для дилера ID: " + dealerId + " и машины ID: " + carId);
        }
        String query = "DELETE FROM affiliation WHERE carid = ? AND dilerid = ?";
        try (Connection connection = connectionInDateBase();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
             preparedStatement.setLong(1, carId);
             preparedStatement.setLong(2, dealerId);
             preparedStatement.executeUpdate();
        }
    }

    public static boolean carExists(Long carId, Long dealerId) throws SQLException {
        String query = "SELECT COUNT(*) FROM affiliation WHERE carid = ? AND dilerid = ?;";
        try (Connection connection = connectionInDateBase();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
             preparedStatement.setLong(1, carId);
             preparedStatement.setLong(2, dealerId);
             ResultSet resultSet = preparedStatement.executeQuery();
             if (resultSet.next()) {
                 return resultSet.getInt(1) > 0;
             }
             return false;
        }
    }

    public static Long updateCarForDealerInDB(Long carId, Long dealerId, Cars car) throws SQLException {
        String queryFirst = "INSERT INTO cars(firm, model, year, power, color, price) VALUES(?, ?, ?, ?, ?, ?);";
        String querySecond = "UPDATE affiliation SET dealerId = ? WHERE carId = ?;";

        Long generatedCarId = null;

        try (Connection connection = connectionInDateBase();
             PreparedStatement preparedStatementFirst = connection.prepareStatement(queryFirst, Statement.RETURN_GENERATED_KEYS)) {

            preparedStatementFirst.setString(1, car.getFirm());
            preparedStatementFirst.setString(2, car.getModel());
            preparedStatementFirst.setInt(3, car.getYear());
            preparedStatementFirst.setInt(4, car.getPower());
            preparedStatementFirst.setString(5, car.getColor());
            preparedStatementFirst.setInt(6, car.getPrice());

            preparedStatementFirst.executeUpdate();

            try (ResultSet generatedKeys = preparedStatementFirst.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    generatedCarId = generatedKeys.getLong(1);
                }
            }

            try (PreparedStatement preparedStatementSecond = connection.prepareStatement(querySecond)) {
                preparedStatementSecond.setLong(1, generatedCarId);  // Устанавливаем dealerId
                preparedStatementSecond.setLong(2, dealerId); // Устанавливаем carId
                preparedStatementSecond.executeUpdate();
            }

        } catch (SQLException e) {
            e.printStackTrace(); // Логируем ошибку
            throw e; // Прокидываем ошибку выше
        }

        return generatedCarId; // Возвращаем ID созданного автомобиля
    }


}