package com.ssafying.domain.chat.controller;

import com.ssafying.domain.chat.dto.ChattingRequest;
import com.ssafying.domain.chat.service.ChatMessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
@CrossOrigin("*")
public class ChatController {

    private final ChatMessageService chatMessageService;
    @MessageMapping("/chatting/{chatRoomId}/messages")
    public void chat(ChattingRequest chattingRequest){
        log.info("Message [{}] send by member: {} to chatting room: {}", chattingRequest.getMessage(), chattingRequest.getUserId(), chattingRequest.getChatRoomId());
        chatMessageService.send(chattingRequest);
    }
}
