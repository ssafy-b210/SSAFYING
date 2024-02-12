package com.ssafying.domain.shuttle.repository.jdbc;

import com.ssafying.domain.shuttle.entity.Shuttle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ShuttleRepository extends JpaRepository<Shuttle, Integer> {

}
