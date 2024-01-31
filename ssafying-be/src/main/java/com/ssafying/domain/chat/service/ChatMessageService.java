package com.ssafying.domain.chat.service;

import com.ssafying.domain.chat.dto.ChatRoomCreateRequest;
import com.ssafying.domain.chat.dto.ChatRoomInviteRequest;
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
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ChatMessageService {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final ChatMessageRepository chatMessageRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final ChatRoomUserRepository chatRoomUserRepository;
    private final UserRepository userRepository;

    // 방 생성 (생성과 동시에 초대 : 다중 초대 가능)
    @Transactional
    public void create(ChatRoomCreateRequest chatRoomCreateRequest) {
        ChatRoom chatRoom = new ChatRoom();
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

    // 방 초대 (단톡방에서만 가능)
    public void invite(ChatRoomInviteRequest chatRoomInviteRequest) {
        List<User> users = chatRoomInviteRequest.getUsers();
        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomInviteRequest.getChatRoomId())
                .orElseThrow(() -> new RuntimeException("해당하는 채팅방이 없습니다"));
        for (User user : users) {
            ChatRoomUser chatRoomUser = ChatRoomUser.builder()
                    .user(user)
                    .chatRoom(chatRoom)
                    .type(RoomType.GROUP)
                    .build();
            chatRoomUserRepository.save(chatRoomUser);
        }
    }

    // 방 조회 (입장)
    public ChatRoom findChatRoom(int id) {
        return chatRoomRepository.findById(id).orElseThrow(() -> new RuntimeException("해당하는 방이 없습니다"));
    }

    // 방 나가기 (남은유저 0명이면 삭제)
    public void exitChatRoom(int id) {

        ChatRoomUser chatRoomUser = chatRoomUserRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("해당하는 참여 채팅방이 없습니다"));
        ChatRoom chatRoom = chatRoomUser.getChatRoom();

        chatRoomUserRepository.deleteById(id);

        List<ChatRoomUser> chatRoomUsers = chatRoomUserRepository.findAllByChatRoom(chatRoom);
        
        // 해당 채팅방 참여 중인 유저가 없다면 방 삭제
        if (chatRoomUsers.isEmpty()) { 
            chatRoomRepository.deleteById(chatRoom.getId());
        }
    }


    public void send(ChattingRequest chattingRequest) {
        sendMessage(chattingRequest);
        saveChatMessage(chattingRequest);
    }

    // 채팅 전송
    public void sendMessage(ChattingRequest chattingRequest) {
        simpMessagingTemplate.convertAndSend("/sub/chatting/" + chattingRequest.getChatRoomId(), chattingRequest.getMessage());
    }


    // 채팅 저장
    @Transactional
    public void saveChatMessage(ChattingRequest chattingRequest) {
        ChatRoom chatRoom = chatRoomRepository.findById(chattingRequest.getChatRoomId())
                .orElseThrow(() -> new RuntimeException("해당 채팅방이 존재하지 않습니다"));

        User user = userRepository.findById(chattingRequest.getUserId())
                .orElseThrow(() -> new RuntimeException("해당 유저가 존재하지 않습니다"));

        ChatMessage chatMessage = ChatMessage.createMessage(
                chattingRequest.getMessage(),
                chatRoom,
                user
        );

        chatMessageRepository.save(chatMessage);
    }


}
