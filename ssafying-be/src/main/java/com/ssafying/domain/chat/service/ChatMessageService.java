package com.ssafying.domain.chat.service;

import com.ssafying.domain.chat.dto.ChattingRequest;
import com.ssafying.domain.chat.entity.ChatMessage;
import com.ssafying.domain.chat.entity.ChatRoom;
import com.ssafying.domain.chat.repository.ChatMessageRepository;
import com.ssafying.domain.chat.repository.ChatRoomRepository;
import com.ssafying.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ChatMessageService {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final ChatMessageRepository chatMessageRepository;
    private final ChatRoomRepository chatRoomRepository;

    // 방 생성
    @Transactional
    public void create(ChatRoom chatRoom) {
        chatRoomRepository.save(chatRoom);
    }

    // 방 조회
    public ChatRoom findChatRoom(int id) {
        return chatRoomRepository.findOne(id);
    }

    // 채팅 전송 (저장)
    @Transactional
    public void send(ChattingRequest chattingRequest) {
        simpMessagingTemplate.convertAndSend("/sub/chatting/" + chattingRequest.getChatRoomId(), chattingRequest.getMessage());
        ChatMessage chatMessage = new ChatMessage();
        chatMessageRepository.save(chatMessage);
    }


}
