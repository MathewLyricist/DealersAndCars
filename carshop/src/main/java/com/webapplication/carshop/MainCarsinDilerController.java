package com.webapplication.carshop;

import com.webapplication.databaserequests.DataBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;

@Controller
@RestController
public class MainCarsinDilerController {

    private final DillersService dealerService; // Финальный атрибут, чтобы избежать проблем с изменением

    @Autowired
    public MainCarsinDilerController(DillersService dealerService) {
        this.dealerService = dealerService;
    }

    /*@GetMapping("/cars/{id}")
    public String getCarsBydealerID(@PathVariable Long id, Model model) throws SQLException {
        Dealers dealer = dealerService.findById(id);
        if (dealer == null) {
            model.addAttribute("errorMessage", "Дилер не найден");
            return "error"; // Отправить на страницу ошибки или на шаблон, который вы используете для оповещения
        }

        List<Cars> cars = DataBase.getAllCarsInDiler(dealer.getId().toString());
        model.addAttribute("dealer", dealer); // Передаем информацию о дилере
        model.addAttribute("cars", cars); // Добавляем список автомобилей
        return "cars"; // Возвращаем имя шаблона
    }*/
}
