package com.job_junction.service.impl;

/**
 * @author Dilan
 * @created 13/12/2023 - 07:12 pm
 */
import com.job_junction.dto.UserDTO;
import com.job_junction.model.User;
import com.job_junction.repo.UserRepo;
import com.job_junction.service.UserService;
import com.job_junction.utils.SendMail;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepo userRepository;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    SendMail mail;

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public UserDTO getUserById(String id) {
        User user = userRepository.findById(id).orElse(null);
        return modelMapper.map(user, UserDTO.class);
    }

    @Override
    public UserDTO getUserByUsername(String username) {
        User user = userRepository.findByUsername(username).orElse(null);
        return modelMapper.map(user, UserDTO.class);
    }
    @Override
    public String resetPassword(String username) {
        User user = userRepository.findByUsername(username).orElse(null);
        String otp=generateOTP();

        if (user!=null){
            if (user.getType().equals("employees")){
                mail.sendEmail(user.getEmployee().getEmail(),otp);
            }else if (user.getType().equals("companies")){
                mail.sendEmail(user.getCompany().getEmail(),otp);
            }
        }

        return otp;
    }

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        userDTO.setPassword(userDTO.getPassword());
        User user = modelMapper.map(userDTO, User.class);
        if (user.getId().length()<2){
            user.setId(generateNextID());
        }
        user = userRepository.save(user);
        return modelMapper.map(user, UserDTO.class);
    }

    @Override
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }

    @Override
    public void updateUserPass(String id, String password){
        userRepository.updatePasswordById(id, password);
    }

    @Override
    public String generateNextID() {
        User user = userRepository.findTopByOrderByIdDesc();

        return generateNextId(user);
    }

    @Override
    public String generateNextId(User user) {
        if (user == null) {
            return "U0001";
        }

        String lastId = user.getId();
        String prefix = lastId.substring(0, 1);
        int lastNumber = Integer.parseInt(lastId.substring(1));

        lastNumber++;

        return prefix + String.format("%04d", lastNumber);
    }
    @Override
    public String generateOTP() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }
}

