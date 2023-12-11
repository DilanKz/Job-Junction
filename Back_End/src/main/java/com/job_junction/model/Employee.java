package com.job_junction.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/**
 * @author Dilan
 * @created 11/12/2023 - 06:36 pm
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "employees")
public class Employee {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private List<String> skills;
    private String profilePicture;
    private String category;

}

