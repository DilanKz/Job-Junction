package com.job_junction.controller;

import com.job_junction.dto.JobPostDTO;
import com.job_junction.service.JobPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * @author Dilan
 * @created 12/12/2023 - 03:49 pm
 */


@RestController
@RequestMapping("/job-posts")
@CrossOrigin
public class JobPostController {

    @Autowired
    JobPostService jobPostService;

    @GetMapping
    public List<JobPostDTO> getAllJobPosts() {
        return jobPostService.getAllJobPosts();
    }

    @GetMapping("/posted")
    public List<JobPostDTO> getAllJobPosts(String id) {
        return jobPostService.getAllCompanyJobPosts(id);
    }

    @GetMapping("/{id}")
    public JobPostDTO getJobPostById(@PathVariable String id) {
        return jobPostService.getJobPostById(id);
    }

    @PostMapping("/save")
    public JobPostDTO saveJobPost(@RequestBody JobPostDTO jobPostDTO ,String id) {
        return jobPostService.saveJobPost(jobPostDTO,id);
    }

    @DeleteMapping("/{id}")
    public void deleteJobPost(@PathVariable String id) {
        jobPostService.deleteJobPost(id);
    }
}

