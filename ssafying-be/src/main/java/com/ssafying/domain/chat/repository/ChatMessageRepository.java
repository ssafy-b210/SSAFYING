package com.ssafying.domain.chat.repository;

import com.ssafying.domain.chat.entity.ChatMessage;
import com.ssafying.domain.user.entity.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ChatMessageRepository {

    private final EntityManager em;

    public void save(ChatMessage chatMessage){
        em.persist(chatMessage);
    }


}
