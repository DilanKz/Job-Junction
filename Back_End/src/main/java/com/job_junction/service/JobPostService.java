package com.job_junction.service;

import com.job_junction.dto.JobPostDTO;
import com.job_junction.model.JobPost;

import java.util.List;

/**
 * @author Dilan
 * @created 11/12/2023 - 10:10 pm
 */
public interface JobPostService {
    List<JobPostDTO> getAllJobPosts();

    JobPostDTO getJobPostById(String id);

    JobPostDTO saveJobPost(JobPostDTO jobPostDTO);

    void deleteJobPost(String id);

    String generateNextID();

    String generateNextId(JobPost jobPost);
}
