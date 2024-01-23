package com.ssafying.domain.chat.controller;

import com.ssafying.domain.chat.dto.ChattingRequest;
import com.ssafying.domain.chat.entity.ChatMessage;
import com.ssafying.domain.chat.entity.ChatRoom;
import com.ssafying.domain.chat.service.ChatMessageService;
import com.ssafying.domain.chat.service.ChatRoomService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Slf4j
@RequiredArgsConstructor
@Controller
public class StompChatController {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final ChatMessageService chatMessageService;
    private final ChatRoomService chatRoomService;

    @MessageMapping("/chatting/{chatRoomId}/messages")
    public void chat(@DestinationVariable Integer chatRoomId, ChattingRequest chattingRequest){
        simpMessagingTemplate.convertAndSend("/sub/chatting/" + chatRoomId, chattingRequest.getMessage());
        log.info("Message [{}] send by member: {} to chatting room: {}", chattingRequest.getMessage(), chattingRequest.getUserId(), chatRoomId);


    }
}
