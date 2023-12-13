package com.job_junction.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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
    private List<String> roles;
    private String entityId;
}

