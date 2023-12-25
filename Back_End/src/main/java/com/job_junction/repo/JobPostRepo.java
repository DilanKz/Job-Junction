package com.job_junction.repo;

import com.job_junction.model.JobPost;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * @author Dilan
 * @created 11/12/2023 - 09:21 pm
 */

public interface JobPostRepo extends MongoRepository<JobPost, String> {
    JobPost findTopByOrderByIdDesc();

    List<JobPost> findByCompanyId_Id(String companyId);
}

