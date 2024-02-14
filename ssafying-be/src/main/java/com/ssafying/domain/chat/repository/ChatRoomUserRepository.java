package com.ssafying.domain.chat.repository;

import com.ssafying.domain.chat.entity.ChatRoom;
import com.ssafying.domain.chat.entity.ChatRoomUser;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChatRoomUserRepository extends JpaRepository<ChatRoomUser, Integer> {

    List<ChatRoomUser> findByUser(User user);

    List<ChatRoomUser> findByChatRoom(ChatRoom chatRoom);

    Optional<ChatRoomUser> findByUserAndChatRoom(User user, ChatRoom chatRoom);


}
