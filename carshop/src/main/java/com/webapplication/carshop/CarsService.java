package com.webapplication.carshop;

import com.webapplication.databaserequests.DataBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class CarsService {

    @Autowired
    private CarsRepository carsRepository;

    @Autowired
    public CarsService(CarsRepository carsRepository) {
        this.carsRepository = carsRepository;
    }

    public List<Cars> findAll() {
        return carsRepository.findAll();
    }

    public void addCarsFromDatabase(Long id) {
        try {
            List<Cars> carsFromDatabase = DataBase.getAllCarsInDiler(id);
            System.out.println("Fetched cars from database: " + carsFromDatabase.size() + " cars found."); // Логирование количества

            if (carsFromDatabase.isEmpty()) {
                System.out.println("No cars found for dealer ID: " + id);
            } else {
                carsRepository.saveAll(carsFromDatabase);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Cars findById(Long id) {
        return carsRepository.findById(id).orElse(null);
    }

    public void deleteCar(Long dealerId, Long carId) {
        try {
            DataBase.deleteCarInAffiliation(dealerId, carId);
        } catch (SQLException e) {
            throw new RuntimeException("Ошибка при удалении связи между автомобилем и дилером с ID машины: " + carId + " и ID дилера: " + dealerId, e);
        }
    }

   public void updateCarForDealer(Long carId, Long dealerId , Cars car) throws SQLException{
        if(findById(carId) != null){
            DataBase.updateCarForDealerInDB(carId, dealerId, car);
        }
    }
}
