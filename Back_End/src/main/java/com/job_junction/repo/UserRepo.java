package com.job_junction.repo;

import com.job_junction.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;


/**
 * @author Dilan
 * @created 13/12/2023 - 07:11 pm
 */

public interface UserRepo extends MongoRepository<User, String> {

    Optional<User> findByUsername(String username);
}

