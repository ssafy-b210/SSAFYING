package com.ssafying.domain.chat.repository;

import com.ssafying.domain.chat.entity.ChatRoom;
import com.ssafying.domain.chat.entity.ChatRoomUser;
import com.ssafying.domain.user.entity.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRoomUserRepository extends JpaRepository<ChatRoomUser, Integer> {

    public List<ChatRoomUser> findAllByUser(User user);

    public List<ChatRoomUser> findAllByChatRoom(ChatRoom chatRoom);

}
