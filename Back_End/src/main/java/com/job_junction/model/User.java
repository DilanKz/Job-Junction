package com.job_junction.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

/**
 * @author Dilan
 * @created 13/12/2023 - 07:06 pm
 */

@Document(collection = "users")
public class User {

    @Id
    private String id;
    private String username;
    private String password;
    private List<String> roles;
    private String entityId;

}
