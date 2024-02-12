package com.ssafying.domain.shuttle.controller;

import com.ssafying.domain.shuttle.dto.request.UserLocationRequest;
import com.ssafying.domain.shuttle.entity.BusStop;
import com.ssafying.domain.shuttle.entity.Shuttle;
import com.ssafying.domain.shuttle.service.BusStopService;
import com.ssafying.domain.shuttle.service.LocationMessageService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Tag(name = "셔틀버스")
@CrossOrigin("*")
public class ShuttleController {

    private final LocationMessageService locationMessageService;
    private final BusStopService busStopService;

    @MessageMapping("/{shuttleId}") //pub/location이 자동으로 붙음
    public void locationSend(UserLocationRequest request){

        locationMessageService.sendLocationMessage(request);

    }

//    @GetMapping("/bus")
//    public List<BusStop> shuttleList(@RequestParam(name = "shuttle")int shuttle){
//
//        List<BusStop> result = busStopService.listShuttle(shuttle);
//
//        return result;
//    }

}
