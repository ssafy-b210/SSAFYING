package com.ssafying.domain.shuttle.repository.jdbc;

import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.shuttle.entity.CampusRegion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CampusRepository extends JpaRepository<Campus, Integer> {

    Optional<Campus> findByCampusRegion(CampusRegion campusRegion);
}
