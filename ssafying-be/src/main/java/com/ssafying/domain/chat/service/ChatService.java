package com.ssafying.domain.chat.service;

import com.ssafying.domain.chat.dto.*;
import com.ssafying.domain.chat.entity.ChatMessage;
import com.ssafying.domain.chat.entity.ChatRoom;
import com.ssafying.domain.chat.entity.ChatRoomUser;
import com.ssafying.domain.chat.entity.RoomType;
import com.ssafying.domain.chat.repository.ChatMessageRepository;
import com.ssafying.domain.chat.repository.ChatRoomRepository;
import com.ssafying.domain.chat.repository.ChatRoomUserRepository;
import com.ssafying.domain.user.dto.SimpleUserDto;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ChatService {

    private final SimpMessagingTemplate simpMessagingTemplate;

    private final ChatMessageRepository chatMessageRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final ChatRoomUserRepository chatRoomUserRepository;
    private final UserRepository userRepository;

    private final EntityManager entityManager;

    // 방 생성 (생성과 동시에 초대 : 다중 초대 가능)
    @Transactional
    public Integer addChatRoom(InviteChatRoomRequest inviteChatRoomRequest) {

        List<Integer> users = inviteChatRoomRequest.getUsersId();

        if (users.size() < 2) throw new RuntimeException("최소 한 명 이상의 유저를 초대해야합니다");

        // 유저가 2명이면 개인채팅방, 그 이상이면 단체 채팅방
        RoomType roomType = users.size() == 2 ? RoomType.PERSONAL : RoomType.GROUP;
        ChatRoom chatRoom = ChatRoom.createChatRoom(roomType);
        chatRoom = chatRoomRepository.save(chatRoom);

        for (int userId : users) {
            User user = getUser(userId);
            ChatRoomUser chatRoomUser = ChatRoomUser.createChatRoomUser(
                    user,
                    chatRoom
            );
            chatRoomUserRepository.save(chatRoomUser);
        }
        return chatRoom.getId();
    }

    // 방 초대 (단톡방에서만 가능)
    @Transactional
    public Integer addChatRoomUser(int roomId, InviteChatRoomRequest inviteChatRoomRequest) {
        List<Integer> usersId = inviteChatRoomRequest.getUsersId();
        ChatRoom chatRoom = getChatRoom(roomId);
        if(chatRoom.getType() == RoomType.PERSONAL) {
            throw new RuntimeException("사용자 초대는 단체 채팅방에서만 가능합니다");
        }

        for (int userId : usersId) {
            User user = getUser(userId);

            Optional<ChatRoomUser> existMember = chatRoomUserRepository.findByUserAndChatRoom(user, chatRoom);
            if(existMember.isPresent()){
                throw new RuntimeException("해당 사용자가 이미 채팅방에 존재합니다");
            }

            ChatRoomUser chatRoomUser = ChatRoomUser.createChatRoomUser(
                    user,
                    chatRoom
            );
            chatRoomUserRepository.save(chatRoomUser);
        }

        return roomId;
    }

    // 참여 채팅방 조회
    public List<ChatRoomUserDto> findChatRoomUser(int userId) {
        User user = getUser(userId);
        List<ChatRoomUser> chatRoomUsers = chatRoomUserRepository.findByUser(user);

        // ChatRoomUserDto로 변환
        return chatRoomUsers.stream()
                .map(ChatRoomUserDto::convertToChatRoomUserDto)
                .collect(Collectors.toList());
    }

    // 방 조회 (입장)
    public ChatRoomDto findChatRoom(int roomId) {
        ChatRoom chatRoom = chatRoomRepository.findById(roomId).orElseThrow(() -> new RuntimeException("해당하는 방이 없습니다"));
        return ChatRoomDto.convertToChatRoomDto(chatRoom);
    }
    
    // 채팅 조회
    public List<ChatMessageDto> findChatMessages(int roomId) {

        ChatRoom chatRoom = getChatRoom(roomId);
        List<ChatMessage> chatMessages = chatMessageRepository.findByChatRoom(chatRoom);

        return chatMessages.stream()
                .map(this::convertToMessageDto)
                .collect(Collectors.toList());
    }

    // 방 나가기 (남은유저 0명이면 삭제)
    @Transactional
    public Integer exitChatRoom(int joinRoomId) {

        ChatRoomUser chatRoomUser = chatRoomUserRepository.findById(joinRoomId)
                .orElseThrow(() -> new RuntimeException("해당하는 참여 채팅방이 없습니다"));
        ChatRoom chatRoom = chatRoomUser.getChatRoom();

        List<ChatRoomUser> chatRoomUsers = chatRoom.getChatRoomUserList();

        System.out.println("채팅방 : "+chatRoom.getId());
        chatRoomUserRepository.delete(chatRoomUser);
        chatRoomUsers.remove(chatRoomUser);

        // 해당 채팅방 참여 중인 유저가 없다면 방 삭제
        if (chatRoomUsers.isEmpty()) {
            chatRoomRepository.deleteById(chatRoom.getId());
        }

        return joinRoomId;
    }


    // 채팅 전송 + 저장
    @Transactional
    public void sendChatMessage(int roomId, ChattingRequest request) {
        log.info("sendMessage [{}]", roomId);
        log.info("saveChatMessage [{}]", roomId);
        ChatRoom chatRoom = getChatRoom(roomId);

        List<ChatRoomUser> chatRoomUsers = chatRoomUserRepository.findByChatRoom(chatRoom);
        if(chatRoomUsers == null) {
            throw new RuntimeException("해당 채팅방에 참여하고 있는 유저가 존재하지 않습니다");
        }

        User user = getUser(request.getUserId());

        ChatMessage chatMessage = ChatMessage.createMessage(
                request.getMessage(),
                chatRoom,
                user
        );

        chatMessage = chatMessageRepository.save(chatMessage);

        ChatMessageDto stompChatResponse = ChatMessageDto.builder()
                .id(chatMessage.getId())
                .chatRoomId(chatRoom.getId())
                .userInfo(SimpleUserDto.convertToSimpleUserDto(user))
                .message(chatMessage.getMessage())
                .createdAt(chatMessage.getCreatedAt())
                .build();
        simpMessagingTemplate.convertAndSend("/sub/chatting/" + roomId, stompChatResponse);

        // 각 ChatRoomUser의 최근 메시지 업데이트
        for (ChatRoomUser chatRoomUser : chatRoomUsers) {
            ChatRoomUser.updateLastMessage(
                    chatRoomUser,
                    request.getMessage()
            );
        }
    }

    private User getUser(int userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("해당하는 유저가 존재하지 않습니다"));
    }

    private ChatRoom getChatRoom(int roomId){
        return chatRoomRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("해당 채팅방이 존재하지 않습니다"));
    }

    private ChatMessageDto convertToMessageDto(ChatMessage chatMessage) {
        return ChatMessageDto.builder()
                .userInfo(SimpleUserDto.builder()
                        .id(chatMessage.getUser().getId())
                        .nickname(chatMessage.getUser().getNickname())
                        .profileImageUrl(chatMessage.getUser().getProfileImageUrl())
                        .build())
                .message(chatMessage.getMessage())
                .createdAt(chatMessage.getCreatedAt())
                .updatedAt(chatMessage.getUpdatedAt())
                .build();
    }


}
