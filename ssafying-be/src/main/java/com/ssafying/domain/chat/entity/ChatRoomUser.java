package com.ssafying.domain.chat.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "chat_room_user")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatRoomUser extends BaseTimeEntity {
    /*
    * 채팅방 - 유저 입장관리 중개테이블
    */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_room_user_id")
    private int id; //채팅방 입장관리 id

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom; // 채팅방

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_message_id")
    private ChatMessage chatMessage; // 메시지

    @Enumerated(EnumType.STRING)
    private RoomType type; //

    @Builder
    public ChatRoomUser(int id, User user, ChatRoom chatRoom, ChatMessage chatMessage, RoomType type) {
        this.id = id;
        this.user = user;
        this.chatRoom = chatRoom;
        this.chatMessage = chatMessage;
        this.type = type;
    }
}
