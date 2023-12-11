package com.job_junction.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * @author Dilan
 * @created 11/12/2023 - 09:49 pm
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {

    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private List<String> skills;
    private LocationDTO location;
    private String profilePicture;
    private String category;

}
