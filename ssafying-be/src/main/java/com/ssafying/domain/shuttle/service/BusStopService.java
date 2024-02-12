package com.ssafying.domain.shuttle.service;

import com.ssafying.domain.shuttle.entity.BusStop;
import com.ssafying.domain.shuttle.repository.jdbc.BusStopRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class BusStopService {

    private final BusStopRepository busStopRepository;

    public List<BusStop> listShuttle(int shuttle){
        List<BusStop> list = busStopRepository.findByShuttleId(shuttle);

        return list;
    }


}
