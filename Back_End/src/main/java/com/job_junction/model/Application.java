package com.job_junction.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * @author Dilan
 * @created 11/12/2023 - 06:43 pm
 */


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Application {

    private String employeeId;
    private String status;
    private LocalDate applicationDate;
    private LocalDateTime interviewDate;

}


