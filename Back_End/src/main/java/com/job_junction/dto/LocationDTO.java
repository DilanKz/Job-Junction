package com.job_junction.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Dilan
 * @created 11/12/2023 - 09:55 pm
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LocationDTO {

    private String city;
    private CoordinatesDTO coordinates;
}

