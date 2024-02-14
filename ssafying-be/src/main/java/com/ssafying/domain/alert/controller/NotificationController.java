package com.ssafying.domain.alert.controller;

import com.ssafying.domain.alert.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequiredArgsConstructor
@RequestMapping("/notifications")
@CrossOrigin("*")
public class NotificationController {

    private final NotificationService notificationService;

    /**
     * 8.1 알림을 위한 SSE 연결
     *
     * @param userId
     * @return
     */
    @GetMapping(value = "/subscribe/{user_id}", produces = "text/event-stream;charset=UTF-8")
    public SseEmitter subscribe(@PathVariable(value = "user_id") int userId) {
        return notificationService.subscribe(userId);
    }

    /**
     * 8.2 알림 전체 조회
     */

}