package com.ssafying.domain.alert.controller;

import com.ssafying.domain.alert.dto.response.FindListNotificationResponse;
import com.ssafying.domain.alert.service.NotificationService;
import com.ssafying.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/notifications")
@Tag(name = "알림")
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
    @Operation(summary = "알림을 위한 SSE 연결")
    public SseEmitter subscribe(@PathVariable(value = "user_id") int userId) {
        return notificationService.subscribe(userId);
    }

    /**
     * 8.2 알림 전체 조회
     */
    @GetMapping("/{userId}")
    @Operation(summary = "알림 전체 조회")
    public ResponseEntity<ResultResponse<List<FindListNotificationResponse>>> notificationList(
            @PathVariable(value = "userId") int userId
    ) {
        List<FindListNotificationResponse> result = notificationService.findListNotification(userId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

}