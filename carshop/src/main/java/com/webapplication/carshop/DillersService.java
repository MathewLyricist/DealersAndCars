package com.webapplication.carshop;

import com.webapplication.databaserequests.DataBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class DillersService {

    @Autowired
    private DillersRepository dilersRepository;

    @Autowired
    public DillersService(DillersRepository dillersRepository) {
        this.dilersRepository = dillersRepository;
    }

    public List<Dealers> findAll() {
        return dilersRepository.findAll();
    }

    public void addDilersFromDatabase() {
        try {
            List<Dealers> dilersFromDatabase = DataBase.getAllDilers();
            dilersRepository.saveAll(dilersFromDatabase);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Dealers findById(Long id) {
        return dilersRepository.findById(id).orElse(null);
    }

    public void deleteDealer(Long id) {
        try {
            // Используем метод из DataBase для удаления дилера
            DataBase.deleteDealerById(id);

            // Дополнительно проверяем, существует ли дилер в репозитории
            if (!dilersRepository.existsById(id)) {
                throw new RuntimeException("Dealer not found with id: " + id);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Error during deleting dealer with id: " + id);
        }
    }

    public void updateDealer(Long id, Dealers dealerData) throws SQLException {
        Dealers existingDealer = dilersRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Дилер не найден с ID: " + id));

        existingDealer.setName(dealerData.getName());
        existingDealer.setCity(dealerData.getCity());
        existingDealer.setAddress(dealerData.getAddress());
        existingDealer.setArea(dealerData.getArea());
        existingDealer.setRating(dealerData.getRating());

        DataBase.updateDealer(id, existingDealer);
    }

    public void addDealer(Dealers dealer) {
        try {
            DataBase.addANewDealer(dealer); // Вызов метода добавления дилера
        } catch (SQLException e) {
            // Обработка возможных ошибок
            throw new RuntimeException("Ошибка добавления дилера: " + e.getMessage(), e);
        }
    }
}
