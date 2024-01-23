package com.ssafying.domain.chat.repository;

import com.ssafying.domain.chat.entity.ChatRoom;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ChatRoomRepository {

    private final EntityManager em;

    public void save(ChatRoom chatRoom){
        em.persist(chatRoom);
    }

    public ChatRoom findOne(int id){
        return em.find(ChatRoom.class, id);
    }

    public List<ChatRoom> findById(int id) {
        return em.createQuery("select c from ChatRoom c where c.id = :id", ChatRoom.class)
                .setParameter("id", id)
                .getResultList();
    }



}
