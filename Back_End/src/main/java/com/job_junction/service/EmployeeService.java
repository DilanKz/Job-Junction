package com.job_junction.service;

import com.job_junction.dto.EmployeeDTO;

import java.util.List;

/**
 * @author Dilan
 * @created 11/12/2023 - 09:44 pm
 */
public interface EmployeeService {
    List<EmployeeDTO> getAllEmployees();

    EmployeeDTO getEmployeeById(String id);

    EmployeeDTO saveEmployee(EmployeeDTO employeeDTO);

    void deleteEmployee(String id);
}
