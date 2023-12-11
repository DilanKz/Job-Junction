package com.job_junction.service.impl;

/**
 * @author Dilan
 * @created 11/12/2023 - 10:01 pm
 */
import com.job_junction.dto.CompanyDTO;
import com.job_junction.model.Company;
import com.job_junction.repo.CompanyRepo;
import com.job_junction.service.CompanyService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    CompanyRepo repo;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public List<CompanyDTO> getAllCompanies() {
        List<Company> companies = repo.findAll();
        return companies.stream()
                .map(company -> modelMapper.map(company, CompanyDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public CompanyDTO getCompanyById(String id) {
        Company company = repo.findById(id).get();
        return  modelMapper.map(company, CompanyDTO.class);
    }

    @Override
    public CompanyDTO saveCompany(CompanyDTO companyDTO) {
        Company company = modelMapper.map(companyDTO, Company.class);
        company = repo.save(company);
        return modelMapper.map(company, CompanyDTO.class);
    }

    @Override
    public void deleteCompany(String id) {
        repo.deleteById(id);
    }
}

