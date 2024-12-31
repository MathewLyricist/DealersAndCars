package com.webapplication.carshop;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Cars {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id") // Явное указание имени столбца
    private Long id;

    @JsonProperty("Firm")
    @Column(name = "firm") // Явное указание имени столбца
    private String firm;

    @JsonProperty("Model")
    @Column(name = "model") // Явное указание имени столбца
    private String model;

    @JsonProperty("Year")
    @Column(name = "year") // Явное указание имени столбца
    private int year;

    @JsonProperty("Power")
    @Column(name = "power") // Явное указание имени столбца
    private int power;

    @JsonProperty("Color")
    @Column(name = "color") // Явное указание имени столбца
    private String color;

    @JsonProperty("Price")
    @Column(name = "price") // Явное указание имени столбца
    private int price;

    // Геттеры и сеттеры

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirm() {
        return firm;
    }

    public void setFirm(String firm) {
        this.firm = firm;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getPower() {
        return power;
    }

    public void setPower(int power) {
        this.power = power;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}