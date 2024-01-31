package com.ssafying.domain.chat.repository;

import com.ssafying.domain.chat.entity.ChatMessage;
import com.ssafying.domain.user.entity.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Integer> {
}
