package com.ssafying.domain.alert.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequiredArgsConstructor
public class AlertController {

    private final SseEmitters sseEmitters;

    @GetMapping("/connect/{userId}")
    public ResponseEntity<SseEmitter> connect(
            @PathVariable("userId") int userId) {
        SseEmitter emitter = sseEmitters.subscribe(userId);

        return ResponseEntity.ok(emitter);
    }
}
