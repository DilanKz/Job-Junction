package com.job_junction.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
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
    private String companyId;
    private String title;
    private String description;
    private List<String> skillsRequired;
    private String salary;
    private Date applicationDeadline;
    private String category;
    private int totalPositions;
    //private List<Application> applications;

}

