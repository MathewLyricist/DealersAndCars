package com.webapplication.databaserequests;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.webapplication.carshop.Cars;

import java.util.List;

public class CarsWrapper {
    @JsonDeserialize(contentAs = Cars.class)
    private List<Cars> cars;

    public List<Cars> getCars() {
        return cars;
    }
}
