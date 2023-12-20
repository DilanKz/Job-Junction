package com.job_junction.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Dilan
 * @created 13/12/2023 - 07:00 pm
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private String id;
    private String username;
    private String password;
    private String type;
    private String entityId;
}

