package com.job_junction.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
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
    private CompanyDTO companyId;
    private String title;
    private String industry;
    private String type;
    private String description;
    private List<String> skillsRequired;
    private String salary;
    private Instant createdAt;
    private List<String> favoriteBy;
}
