package com.ssafying.domain.crew.repository.jdbc;

import com.ssafying.domain.crew.entity.Crew;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface CrewRepository extends JpaRepository<Crew, Integer>, JpaSpecificationExecutor<Crew> {

    List<Crew> findAll(Specification<Crew> spec);
}