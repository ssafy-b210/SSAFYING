package com.ssafying.domain.shuttle.repository.jdbc;

import com.ssafying.domain.shuttle.entity.BusStop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BusStopRepository extends JpaRepository<BusStop, Integer> {

    @Query("select b from BusStop b where b.shuttle = :shuttle")
    List<BusStop> findByShuttleId(@Param("shuttle")int shuttle);
}
