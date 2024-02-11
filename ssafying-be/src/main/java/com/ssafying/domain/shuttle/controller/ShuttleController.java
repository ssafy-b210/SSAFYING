package com.ssafying.domain.shuttle.controller;

import com.ssafying.domain.shuttle.dto.request.UserLocationRequest;
import com.ssafying.domain.shuttle.service.LocationMessageService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Tag(name = "셔틀버스")
@CrossOrigin("*")
public class ShuttleController {

    private final LocationMessageService locationMessageService;

    @MessageMapping("/{shuttleId}") //pub/location이 자동으로 붙음
    public void locationSend(UserLocationRequest request){

        locationMessageService.sendLocationMessage(request);

    }

}
