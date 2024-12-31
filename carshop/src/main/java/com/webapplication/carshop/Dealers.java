package com.webapplication.carshop;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Dealers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dealerid")
    private Long dealerid;

    @JsonProperty("Name")
    @Column(name = "name") // Явная указание имени столбца
    private String name;

    @JsonProperty("City")
    @Column(name = "city") // Явная указание имени столбца
    private String city;

    @JsonProperty("Address")
    @Column(name = "address") // Явная указание имени столбца
    private String address;

    @JsonProperty("Area")
    @Column(name = "area") // Явная указание имени столбца
    private String area;

    @JsonProperty("Rating")
    @Column(name = "rating") // Явная указание имени столбца
    private float rating;

    // Геттеры и сеттеры

    public Long getId() {
        return dealerid;
    }

    public String getName() {
        return name;
    }

    public String getCity() {
        return city;
    }

    public String getAddress() {
        return address;
    }

    public String getArea() {
        return area;
    }

    public float getRating() {
        return rating;
    }

    public void setId(Long id) { // Добавление сеттера для id (если необходимо)
        this.dealerid = id;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return String.format("Diller{id=%d, name='%s', city='%s', address='%s', area='%s', rating=%.2f}",
                dealerid, name, city, address, area, rating);
    }
}
