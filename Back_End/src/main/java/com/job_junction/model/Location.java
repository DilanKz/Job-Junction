package com.job_junction.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Dilan
 * @created 11/12/2023 - 06:38 pm
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Location {

    private String city;
    private String state;
    private String country;
    private Coordinates coordinates;

}

