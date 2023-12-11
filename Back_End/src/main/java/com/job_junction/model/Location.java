package com.job_junction.model;

/**
 * @author Dilan
 * @created 11/12/2023 - 06:38 pm
 */
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Location {

    private String city;
    private String state;
    private String country;
    private Coordinates coordinates;

}

