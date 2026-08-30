package com.roadwatch.roadwatch.controller;

import com.roadwatch.roadwatch.model.Report;
import com.roadwatch.roadwatch.repository.ReportRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin
public class ReportController {

    private final ReportRepository repository;

    public ReportController(ReportRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public Report createReport(
            @RequestParam String name,
            @RequestParam String issueType,
            @RequestParam String location,
            @RequestParam String description,
            @RequestParam(required = false) MultipartFile image) throws IOException {

        Report report = new Report();

        report.setName(name);
        report.setIssueType(issueType);
        report.setLocation(location);
        report.setDescription(description);
        report.setStatus("Pending");

        if (image != null && !image.isEmpty()) {

            File folder = new File(System.getProperty("user.dir"), "uploads");

            if (!folder.exists()) {
                folder.mkdirs();
            }

            String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();

            File file = new File(folder, fileName);

            image.transferTo(file);

            report.setImageUrl("/uploads/" + fileName);
        }

        return repository.save(report);
    }

    @GetMapping
    public List<Report> getReports() {
        return repository.findAll();
    }
}