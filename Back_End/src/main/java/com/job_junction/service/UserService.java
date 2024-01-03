package com.job_junction.service;

import com.job_junction.dto.UserDTO;
import com.job_junction.model.User;

import java.util.List;

/**
 * @author Dilan
 * @created 13/12/2023 - 07:17 pm
 */
public interface UserService {
    List<UserDTO> getAllUsers();

    UserDTO getUserById(String id);

    UserDTO getUserByUsername(String username);

    String resetPassword(String username);

    UserDTO saveUser(UserDTO userDTO);

    void deleteUser(String id);

    void updateUserPass(String id, String password);

    String generateNextID();

    String generateNextId(User user);

    String generateOTP();
}
