package com.roadwatch.roadwatch.repository;

import com.roadwatch.roadwatch.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Long> {
}