package com.ssafying.domain.chat.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Table(name = "chat_message")
@Getter
public class ChatMessage {

    @Id
    @GeneratedValue
    @Column(name = "chat_message_id")
    private int id; //채팅메시지 id

    private String message; //채팅메시지

    @Column(name = "is_read")
    private boolean isRead; //조회여부

    @Column(name = "created_at")
    private LocalDateTime createdAt; //생성일자

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom; // 채팅방

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id")
//    private User user; // 유저
}
