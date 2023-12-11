package com.job_junction.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Dilan
 * @created 11/12/2023 - 10:00 pm
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDTO {

    private String id;
    private String name;
    private String industry;
    private String email;
    private LocationDTO location;
    private String description;
    private String profilePicture;
}

