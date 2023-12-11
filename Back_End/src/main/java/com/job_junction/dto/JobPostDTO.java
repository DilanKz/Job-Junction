package com.job_junction.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

/**
 * @author Dilan
 * @created 11/12/2023 - 10:09 pm
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobPostDTO {
    private String id;
    private String companyId;
    private String title;
    private String description;
    private List<String> skillsRequired;
    private String salary;
    private Date applicationDeadline;
    private String category;
    private int totalPositions;
}
