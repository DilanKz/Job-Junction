package com.job_junction.repo;

import com.job_junction.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;


/**
 * @author Dilan
 * @created 13/12/2023 - 07:11 pm
 */

public interface UserRepo extends MongoRepository<User, String> {

    Optional<User> findByUsername(String username);
    User findTopByOrderByIdDesc();
    @Query("{'id': ?0}")
    void updatePasswordById(String userId, String newPassword);
}

