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
    private String name;
    private String email;
    private String password;
    private String industry;
    private byte[] profilePicture;
    private List<String> favorites;
}

