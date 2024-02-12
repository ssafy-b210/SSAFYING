package com.ssafying.domain.shuttle.controller;

import com.ssafying.domain.shuttle.dto.request.UserLocationRequest;
import com.ssafying.domain.shuttle.dto.response.BusStopListResponse;
import com.ssafying.domain.shuttle.entity.BusStop;
import com.ssafying.domain.shuttle.entity.Shuttle;
import com.ssafying.domain.shuttle.service.BusStopService;
import com.ssafying.domain.shuttle.service.LocationMessageService;
import com.ssafying.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @MessageMapping("/location/{shuttleId}") //pub이 자동으로 붙음
    public void locationSend(UserLocationRequest request){

        locationMessageService.sendLocationMessage(request);

    }

    @GetMapping("/bus")
    public ResponseEntity<ResultResponse<List<BusStopListResponse>>> busStopList(
            @RequestParam(name = "shuttleId")Shuttle shuttleId){

        List<BusStopListResponse> result = busStopService.listShuttle(shuttleId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

}
