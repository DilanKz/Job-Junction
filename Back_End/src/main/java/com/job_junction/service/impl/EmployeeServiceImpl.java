package com.job_junction.service.impl;

import com.job_junction.dto.EmployeeDTO;
import com.job_junction.model.Employee;
import com.job_junction.repo.EmployeeRepo;
import com.job_junction.service.EmployeeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


/**
 * @author Dilan
 * @created 11/12/2023 - 09:44 pm
 */


@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepo repo;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees = repo.findAll();
        return employees.stream()
                .map(employee -> modelMapper.map(employee, EmployeeDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO getEmployeeById(String id) {
        Employee employee = repo.findById(id).get();
        return modelMapper.map(employee, EmployeeDTO.class);
    }

    @Override
    public EmployeeDTO saveEmployee(EmployeeDTO employeeDTO) {
        Employee employee = modelMapper.map(employeeDTO, Employee.class);
        employee = repo.save(employee);
        return modelMapper.map(employee, EmployeeDTO.class);
    }

    @Override
    public void deleteEmployee(String id) {
        repo.deleteById(id);
    }
}

