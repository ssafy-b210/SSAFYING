package com.ssafying.domain.shuttle.service;

import com.ssafying.domain.shuttle.dto.request.BusStopListRequest;
import com.ssafying.domain.shuttle.dto.response.BusStopListResponse;
import com.ssafying.domain.shuttle.entity.BusStop;
import com.ssafying.domain.shuttle.entity.Shuttle;
import com.ssafying.domain.shuttle.repository.jdbc.BusStopRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class BusStopService {

    private final BusStopRepository busStopRepository;

    public List<BusStopListResponse> listShuttle(Shuttle shuttle){
        
        //셔틀 아이디로 찾기
        List<BusStop> list = busStopRepository.findByShuttleId(shuttle);

        List<BusStopListResponse> response = new ArrayList<>();

        for(BusStop stop : list){

            response.add(
                    BusStopListResponse.builder()
                            .busStopName(stop.getBusStopName())
                            .latitude(stop.getLatitude())
                            .longitude(stop.getLongitude())
                            .arrivalAt(stop.getArrivalAt())
                            .build()
            );
        }

        return response;
    }


}
