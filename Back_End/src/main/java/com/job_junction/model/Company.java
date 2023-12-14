package com.job_junction.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author Dilan
 * @created 11/12/2023 - 06:42 pm
 */


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "companies")
public class Company {

    @Id
    private String id;
    private String name;
    private String industry;
    private String email;
    private String state;
    private Location location;
    private String description;
    private byte[] profilePicture;

}
