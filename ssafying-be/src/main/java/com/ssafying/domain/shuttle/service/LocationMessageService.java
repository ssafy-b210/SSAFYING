package com.ssafying.domain.shuttle.service;

import com.ssafying.domain.shuttle.dto.request.UserLocationRequest;
import com.ssafying.domain.shuttle.dto.response.UserLocationResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class LocationMessageService {

    private final SimpMessagingTemplate simpMessagingTemplate;


    public void sendLocationMessage(UserLocationRequest request) {

        String destination = "/sub/location/" + request.getShuttleId();
        //이렇게 하면 됨 -> 특정 셔틀 아이디를 하나의 방이라고 생각
        //{shuttleId}호차 방을 구독하겠다

        System.out.println("/////////////////////////");
        System.out.println("shuttle id = " + request.getShuttleId());
        System.out.println("latitude = " + request.getLatitude());
        System.out.println("longitude = " + request.getLongitude());
        System.out.println("/////////////////////////");


        simpMessagingTemplate.convertAndSend(destination, request);
    }

}
