package com.webapplication.carshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController // Для возврата JSON напрямую
public class DealersController {

    @Autowired
    private DillersService dealerService;

    @GetMapping("/dealers")
    public ResponseEntity<List<Dealers>> getJSONDealers() {
        List<Dealers> dealers = dealerService.findAll();
        if (dealers == null || dealers.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(dealers);
    }

    @DeleteMapping("/dealers/{id}")
    public ResponseEntity<?> deleteDealer(@PathVariable Long id) {
        try {
            dealerService.deleteDealer(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }

    @PutMapping("/dealers/{id}")
    public ResponseEntity<?> updateDealer(@PathVariable Long id, @RequestBody Dealers dealerData) throws SQLException {
        try {
            dealerService.updateDealer(id, dealerData);
            return ResponseEntity.noContent().build(); // Возвращаем 204 статус "No Content"
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage()); // Возвращаем 404 статус с сообщением, если не найден
        }
    }

    @PostMapping("/dealers")
    public ResponseEntity<?> addDealer(@RequestBody Dealers dealer) {
        try {
            dealerService.addDealer(dealer);
            return ResponseEntity.status(201).body("{\"message\":\"Дилер успешно добавлен!\"}");
        } catch (RuntimeException e) {
            return ResponseEntity.status(400).body("{\"error\":\"Ошибка: " + e.getMessage() + "\"}");
        }
    }
}
