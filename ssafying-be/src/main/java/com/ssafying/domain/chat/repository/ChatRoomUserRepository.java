package com.ssafying.domain.chat.repository;

import com.ssafying.domain.chat.entity.ChatRoomUser;
import com.ssafying.domain.user.entity.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ChatRoomUserRepository {

    private final EntityManager em;

    public void save(ChatRoomUser chatRoomUser){
        em.persist(chatRoomUser);
    }

    public List<ChatRoomUser> findChatRoomByUsers(User user) {
        return em.createQuery("select c from ChatRoomUser c where c.user = :user", ChatRoomUser.class)
                .setParameter("user", user)
                .getResultList();
    }

}
