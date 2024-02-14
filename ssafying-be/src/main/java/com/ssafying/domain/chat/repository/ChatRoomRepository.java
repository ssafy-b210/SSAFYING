package com.ssafying.domain.chat.repository;

import com.ssafying.domain.chat.entity.ChatRoom;
import com.ssafying.domain.user.entity.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, Integer> {
    public void deleteById(int id);

    @Query("SELECT cr.chatRoom FROM ChatRoomUser cr WHERE cr.user = :user")
    List<ChatRoom> findChatRoomsByUser(@Param("user") User user);

}
