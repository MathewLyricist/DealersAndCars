package com.webapplication.carshop;

import com.webapplication.databaserequests.DataBase;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CarsController {

    @Autowired
    private CarsService carsService;

    @GetMapping("/cars/{id}")
    public ResponseEntity<List<Cars>> getJSONCars(@PathVariable Long id) throws SQLException {
        List<Cars> cars = DataBase.getAllCarsInDiler(id);
        if (cars == null || cars.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(cars);
    }

    @DeleteMapping("/dealers/{dealerId}/cars/{carId}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long dealerId, @PathVariable Long carId) {
        try {
            carsService.deleteCar(dealerId, carId);
            return ResponseEntity.noContent().build(); // Возвращаем 204 No Content
        } catch (Exception e) {
            System.err.println("Общая ошибка: " + e.getMessage());
            return ResponseEntity.status(500).build(); // Возвращаем 500 Internal Server Error без тела
        }
    }

    @PutMapping("/cars/{carId}")
    public ResponseEntity<Void> updateCar(@PathVariable Long carId, @PathVariable Long dealerId, @RequestBody Cars carDetails) {
        try {
            carsService.updateCarForDealer(carId, dealerId, carDetails);
            return ResponseEntity.noContent().build();
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build(); // Возвращаем 500 Internal Server Error без тела
        }
    }
}

