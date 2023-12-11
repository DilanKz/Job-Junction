package com.job_junction.service.impl;

/**
 * @author Dilan
 * @created 11/12/2023 - 10:11 pm
 */
import com.job_junction.dto.JobPostDTO;
import com.job_junction.model.JobPost;
import com.job_junction.repo.JobPostRepo;
import com.job_junction.service.JobPostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class JobPostServiceImpl implements JobPostService {

    @Autowired
    JobPostRepo repo;

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
    public JobPostDTO getJobPostById(String id) {
        JobPost jobPost = repo.findById(id).get();
        return modelMapper.map(jobPost, JobPostDTO.class);
    }

    @Override
    public JobPostDTO saveJobPost(JobPostDTO jobPostDTO) {
        JobPost jobPost = modelMapper.map(jobPostDTO, JobPost.class);
        jobPost = repo.save(jobPost);
        return modelMapper.map(jobPost, JobPostDTO.class);
    }

    @Override
    public void deleteJobPost(String id) {
        repo.deleteById(id);
    }
}

