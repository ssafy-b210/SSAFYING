package com.ssafying.domain.alert.service;

import com.ssafying.domain.alert.repository.EmitterRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final UserRepository userRepository;
    private final EmitterRepository emitterRepository;

    private static final Long DEFAULT_TIMEOUT = 600L * 1000 * 60;

    public SseEmitter subscribe(int userId) {
        SseEmitter emitter = createEmitter(userId);

        sendToClient(userId, "EventStream Created. [userId=" + userId + "]", "sse 접속 성공");
        return emitter;
    }

    // 좋아요를 누르거나 댓글을 남기는 등 알림이 전송되어야 하는 곳에서 이 함수를 실행시킴
    // sse에도 해당 알림 내용을 전달하고 디비에도 저장해줘야 함
    // customNotify 함수를 사용하는 유저는
    public <T> void customNotify(int userId, T data, String comment, String type) {
        // SSE 에 해당 알림 전송
        sendToClient(userId, data, comment, type);

        // 디비에도 저장해줌


    }

    public void notify(int userId, Object data, String comment) {
        sendToClient(userId, data, comment);
    }

    private void sendToClient(int userId, Object data, String comment) {
        SseEmitter emitter = emitterRepository.get(userId);
        if (emitter != null) {
            try {
                emitter.send(SseEmitter.event()
                        .id(String.valueOf(userId))
                        .name("sse")
                        .data(data)
                        .comment(comment));
            } catch (IOException e) {
                emitterRepository.deleteById(userId);
                emitter.completeWithError(e);
            }
        }
    }

    private <T> void sendToClient(int userId, T data, String comment, String type) {
        SseEmitter emitter = emitterRepository.get(userId);
        if (emitter != null) {
            try {
                emitter.send(SseEmitter.event()
                        .id(String.valueOf(userId))
                        .name(type)
                        .data(data)
                        .comment(comment));
            } catch (IOException e) {
                emitterRepository.deleteById(userId);
                emitter.completeWithError(e);
            }
        }
    }

    private SseEmitter createEmitter(int userId) {
        SseEmitter emitter = new SseEmitter(DEFAULT_TIMEOUT);
        emitterRepository.save(userId, emitter);

        emitter.onCompletion(() -> emitterRepository.deleteById(userId));
        emitter.onTimeout(() -> emitterRepository.deleteById(userId));

        return emitter;
    }

    private User validUser(int userId) {
        return userRepository.findById(userId).orElseThrow(() -> new RuntimeException("일치하는 사용자가 없습니다."));
    }
}