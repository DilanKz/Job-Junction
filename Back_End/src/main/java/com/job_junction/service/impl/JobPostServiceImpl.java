package com.job_junction.service.impl;

/**
 * @author Dilan
 * @created 11/12/2023 - 10:11 pm
 */
import com.job_junction.dto.JobPostDTO;
import com.job_junction.model.JobPost;
import com.job_junction.repo.CompanyRepo;
import com.job_junction.repo.JobPostRepo;
import com.job_junction.service.JobPostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class JobPostServiceImpl implements JobPostService {

    @Autowired
    JobPostRepo repo;

    @Autowired
    CompanyRepo companyRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public List<JobPostDTO> getAllJobPosts() {
        List<JobPost> jobPosts = repo.findAll();
        return jobPosts.stream()
                .map(jobPost -> modelMapper.map(jobPost, JobPostDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<JobPostDTO> getAllCompanyJobPosts(String id) {
        List<JobPost> jobPosts = repo.findByCompanyId_Id(id);
        return jobPosts.stream()
                .map(jobPost -> modelMapper.map(jobPost, JobPostDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public JobPostDTO getJobPostById(String id) {
        JobPost jobPost = repo.findById(id).get();
        return modelMapper.map(jobPost, JobPostDTO.class);
    }

    @Override
    public JobPostDTO saveJobPost(JobPostDTO jobPostDTO,String id) {
        JobPost jobPost = modelMapper.map(jobPostDTO, JobPost.class);
        jobPost.setCompanyId(companyRepo.findById(id).get());

        if (jobPost.getId().length()<2){
            jobPost.setId(generateNextID());
            jobPost.setCreatedAt(Instant.now());
        }

        jobPost = repo.save(jobPost);
        return modelMapper.map(jobPost, JobPostDTO.class);
    }

    @Override
    public void deleteJobPost(String id) {
        repo.deleteById(id);
    }

    @Override
    public String generateNextID() {
        JobPost jobPost = repo.findTopByOrderByIdDesc();

        return generateNextId(jobPost);
    }

    @Override
    public String generateNextId(JobPost jobPost) {
        if (jobPost == null) {
            return "J0001";
        }

        String lastId = jobPost.getId();
        String prefix = lastId.substring(0, 1);
        int lastNumber = Integer.parseInt(lastId.substring(1));

        lastNumber++;

        return prefix + String.format("%04d", lastNumber);
    }
}

