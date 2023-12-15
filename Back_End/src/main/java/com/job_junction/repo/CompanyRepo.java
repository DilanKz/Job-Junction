package com.job_junction.repo;

import com.job_junction.model.Company;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @author Dilan
 * @created 11/12/2023 - 09:21 pm
 */

public interface CompanyRepo extends MongoRepository<Company, String> {
    Company findTopByOrderByIdDesc();
}

