package com.ssafying.domain.crew.repository.jdbc;

import com.ssafying.domain.crew.entity.Crew;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CrewRepository extends JpaRepository<Crew, Integer> {
}
