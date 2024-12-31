package com.webapplication.databaserequests;

import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.webapplication.carshop.Cars;
import com.webapplication.carshop.Dealers;

import java.io.File;
import java.util.List;

public class ImportJsonData {
    /*public void importJsondilers(){
        String fileName = "./src/main/java/com/webapplication/databaserequests/dilers.json";
        ObjectMapper mapper = new ObjectMapper();

        try {
            List<Dealers> dillersList = mapper.readValue(new File(fileName),
                    new com.fasterxml.jackson.core.type.TypeReference<List<Dealers>>() {});
            System.out.println("Loaded dillers:");
            for (Dealers diller : dillersList) {
                System.out.printf("Name: %s, City: %s, Address: %s, Area: %s, Rating: %f%n,",
                        diller.getName(), diller.getCity(), diller.getAddress(), diller.getArea(), diller.getRating());
            }
            DataBase.addDillersInDB(dillersList);
        } catch (DatabindException e) {
            System.out.println("Error parsing JSON data: " + e);
        }  catch (Exception e) {
            System.out.println("Unexpected error: " + e.getMessage());
        }
    }*/

    /*public void importJsonCars(){
        String fileName1 = "./src/main/java/com/webapplication/databaserequests/cars.json";

        ObjectMapper mapper = new ObjectMapper();

        try {
            CarsWrapper wrapper = mapper.readValue(new File(fileName1), CarsWrapper.class);
            System.out.println("Loaded cars:");
            for (Cars car : wrapper.getCars()) {
                System.out.printf("Firm: %s, Model: %s, Year: %d, Price: %d, Power: %d, Color: %s%n",
                        car.getFirm(), car.getModel(), car.getYear(), car.getPrice(), car.getPower(), car.getColor());
            }
            DataBase.addCarsInDB(wrapper);

        } catch (DatabindException e) {
            System.out.println("Error parsing JSON data: " + e);
        }  catch (Exception e) {
            System.out.println("Unexpected error: " + e.getMessage());
        }
    }*/
}
