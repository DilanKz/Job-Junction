package com.job_junction.service;

import com.job_junction.dto.CompanyDTO;
import com.job_junction.model.Company;

import java.util.List;

/**
 * @author Dilan
 * @created 11/12/2023 - 10:02 pm
 */
public interface CompanyService {
    List<CompanyDTO> getAllCompanies();

    CompanyDTO getCompanyById(String id);

    CompanyDTO saveCompany(CompanyDTO companyDTO);

    void deleteCompany(String id);

    String generateNextID();

    String generateNextId(Company company);
}
