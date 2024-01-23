package com.ssafying.domain.chat.service;

import com.ssafying.domain.chat.entity.ChatRoom;
import com.ssafying.domain.chat.repository.ChatRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ChatRoomService {

    private final ChatRoomRepository chatRoomRepository;

    // 방 생성
    public void create(ChatRoom chatRoom){
        chatRoomRepository.save(chatRoom);
    }

    // 방 조회
    public ChatRoom findChatRoom(int id){
        return chatRoomRepository.findOne(id);
    }

}
