package com.ssafying.domain.chat.service;

import com.ssafying.domain.chat.dto.ChatRoomCreateRequest;
import com.ssafying.domain.chat.dto.ChattingRequest;
import com.ssafying.domain.chat.entity.ChatMessage;
import com.ssafying.domain.chat.entity.ChatRoom;
import com.ssafying.domain.chat.entity.ChatRoomUser;
import com.ssafying.domain.chat.entity.RoomType;
import com.ssafying.domain.chat.exception.InsufficientUsersException;
import com.ssafying.domain.chat.repository.ChatMessageRepository;
import com.ssafying.domain.chat.repository.ChatRoomRepository;
import com.ssafying.domain.chat.repository.ChatRoomUserRepository;
import com.ssafying.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ChatMessageService {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final ChatMessageRepository chatMessageRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final ChatRoomUserRepository chatRoomUserRepository;

    // 방 생성 (초대 : 다중 초대 가능)
    @Transactional
    public void create(ChatRoomCreateRequest chatRoomCreateRequest) {
        ChatRoom chatRoom = new ChatRoom();
        chatRoom.setCreatedAt(LocalDateTime.now());
        chatRoom = chatRoomRepository.save(chatRoom);

        List<User> users = chatRoomCreateRequest.getUsers();

        if (users.size() < 2) throw new InsufficientUsersException();

        RoomType roomType = users.size() == 2 ? RoomType.PERSONAL : RoomType.GROUP;
        for (User user : users) {
            ChatRoomUser chatRoomUser = ChatRoomUser.builder()
                    .user(user)
                    .chatRoom(chatRoom)
                    .type(roomType)
                    .build();
            chatRoomUserRepository.save(chatRoomUser);
        }

    }

    // 방 조회 (입장)
    public ChatRoom findChatRoom(int id) {
        return chatRoomRepository.findOne(id);
    }

    // 방 나가기 (삭제아님)
    public void exitChatRoom() {

    }

    // 채팅 전송 (저장)
    @Transactional
    public void send(ChattingRequest chattingRequest) {
        simpMessagingTemplate.convertAndSend("/sub/chatting/" + chattingRequest.getChatRoomId(), chattingRequest.getMessage());
        ChatMessage chatMessage = new ChatMessage();
        chatMessageRepository.save(chatMessage);
    }


}
