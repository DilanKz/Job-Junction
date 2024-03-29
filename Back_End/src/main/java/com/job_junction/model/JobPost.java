package com.job_junction.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.List;

/**
 * @author Dilan
 * @created 11/12/2023 - 06:43 pm
 */


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "jobPosts")
public class JobPost {

    @Id
    private String id;
    private Company companyId;
    private String title;
    private String industry;
    private String type;
    private String description;
    private List<String> skillsRequired;
    private String salary;
    private Instant createdAt;
    private List<String> favoriteBy;

}

