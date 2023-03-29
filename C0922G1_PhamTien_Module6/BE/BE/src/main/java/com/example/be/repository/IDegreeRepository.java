package com.example.be.repository;

import com.example.be.dto.IDegreeDTO;
import com.example.be.model.Degree;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IDegreeRepository extends JpaRepository<Degree,Integer> {
    @Query(value = "select degree_id as degreeId, degree_name as degreeName from degree",
    countQuery = "select degree_id as degreeId, degree_name as degreeName from degree",
    nativeQuery = true)
    List<IDegreeDTO> getAllDegree();
}
