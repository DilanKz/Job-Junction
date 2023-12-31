package com.job_junction.controller;

import com.job_junction.dto.CompanyDTO;
import com.job_junction.dto.LocationDTO;
import com.job_junction.dto.UserDTO;
import com.job_junction.service.CompanyService;
import com.job_junction.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

/**
 * @author Dilan
 * @created 12/12/2023 - 03:49 pm
 */

@RestController
@RequestMapping("/companies")
@CrossOrigin
public class CompanyController {

    @Autowired
    CompanyService companyService;

    @Autowired
    UserService userService;


    @GetMapping("/getAll")
    public List<CompanyDTO> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    @GetMapping("/{id}")
    public CompanyDTO getCompanyById(@PathVariable String id) {
        return companyService.getCompanyById(id);
    }

    @PostMapping("/save")
    public CompanyDTO saveCompany(@RequestBody CompanyDTO companyDTO) {
        return companyService.saveCompany(companyDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteCompany(@PathVariable String id) {
        companyService.deleteCompany(id);
    }

    @PostMapping("/pfp")
    public UserDTO addProfilePicture(@RequestParam("image") MultipartFile file, @RequestParam("id") String id ,@RequestParam("uid") String uid) throws IOException {
        CompanyDTO companyById = companyService.getCompanyById(id);
        companyById.setProfilePicture(file.getBytes());

        CompanyDTO company = companyService.saveCompany(companyById);

        UserDTO userById = userService.getUserById(uid);
        userById.setCompany(company);

        return userService.saveUser(userById);
    }

    @PostMapping("/location")
    public UserDTO addLocation(@RequestBody LocationDTO dto , @RequestParam("id") String id ,@RequestParam("uid") String uid){
        CompanyDTO companyById = companyService.getCompanyById(id);
        companyById.setLocation(dto);

        CompanyDTO company = companyService.saveCompany(companyById);

        UserDTO userById = userService.getUserById(uid);
        userById.setCompany(company);

        return userService.saveUser(userById);
    }
}

