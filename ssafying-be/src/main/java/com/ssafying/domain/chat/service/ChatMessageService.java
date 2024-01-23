package com.ssafying.domain.chat.service;

import com.ssafying.domain.chat.entity.ChatMessage;
import com.ssafying.domain.chat.repository.ChatMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ChatMessageService {

    private final ChatMessageRepository chatMessageRepository;

    // 채팅 전송 (저장)
    public void send(ChatMessage chatMessage){
        chatMessageRepository.save(chatMessage);
    }


}
