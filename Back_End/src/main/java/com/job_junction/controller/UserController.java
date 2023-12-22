package com.job_junction.controller;

/**
 * @author Dilan
 * @created 13/12/2023 - 08:08 pm
 */
import com.job_junction.dto.UserDTO;
import com.job_junction.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;


    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/register")
    public UserDTO registerUser(@RequestBody UserDTO userDTO) {
        userDTO.setPassword((userDTO.getPassword()));
        return userService.saveUser(userDTO);
    }

    @GetMapping("/login")
    public UserDTO loginUser(String user){
        return userService.getUserByUsername(user);
    }
}

