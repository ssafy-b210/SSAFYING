package com.ssafying.domain.chat.service;

import com.ssafying.domain.chat.entity.ChatRoom;
import com.ssafying.domain.chat.entity.ChatRoomUser;
import com.ssafying.domain.chat.repository.ChatMessageRepository;
import com.ssafying.domain.chat.repository.ChatRoomRepository;
import com.ssafying.domain.chat.repository.ChatRoomUserRepository;
import com.ssafying.domain.user.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class ChatServiceTest {

    @Autowired
    ChatMessageRepository chatMessageRepository;
    @Autowired
    ChatRoomRepository chatRoomRepository;
    @Autowired
    ChatRoomUserRepository chatRoomUserRepository;

    @Autowired
    ChatService chatService;

    @Test
    public void 채팅방_생성() throws Exception {
        // given
        User user1 = new User();
        User user2 = new User();
        User user3 = new User();
//        user1.setName("user1");
//        user2.setName("user2");
//        user3.setName("user3");
        List<User> users = new ArrayList<>();
        users.add(user1);
        users.add(user2);
        users.add(user3);

//        AddChatRoomRequest addChatRoomRequest = new AddChatRoomRequest(users);

        // when
//        chatMessageService.create(addChatRoomRequest);

        // then
        List<ChatRoomUser> chatRoomUsers = chatRoomUserRepository.findAll();
        ChatRoom createdChatRoom = chatRoomUsers.get(0).getChatRoom();

        assertNotNull(createdChatRoom);
        assertEquals(users.size(), chatRoomUsers.size());

        for (ChatRoomUser chatRoomUser : chatRoomUsers) {
            assertEquals(createdChatRoom.getId(), chatRoomUser.getChatRoom().getId());
        }
    }

    @Test
    public void 채팅방_초대() throws Exception {
        // given

        // when

        // then
    }

}