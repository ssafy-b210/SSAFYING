package com.ssafying.domain.shuttle.repository.jdbc;

import com.ssafying.domain.shuttle.entity.BusStop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusStopRepository extends JpaRepository<BusStop, Integer> {
}
