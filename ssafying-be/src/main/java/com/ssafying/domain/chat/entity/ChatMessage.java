package com.ssafying.domain.chat.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "chat_message")
@Getter
public class ChatMessage extends BaseTimeEntity {

    @Id
    @GeneratedValue
    @Column(name = "chat_message_id")
    private int id; //채팅메시지 id

    private String message; //채팅메시지

    @Column(name = "is_read")
    private boolean isRead; //조회여부

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom; // 채팅방

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // 유저

    public static ChatMessage createMessage(
            String message,
            ChatRoom chatRoom,
            User user
    ) {
        ChatMessage chatMessage = new ChatMessage();

        chatMessage.message = message;
        chatMessage.chatRoom = chatRoom;
        chatMessage.user = user;

        return chatMessage;
    }

}
