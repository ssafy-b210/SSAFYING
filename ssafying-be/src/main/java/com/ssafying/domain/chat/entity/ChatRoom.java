package com.ssafying.domain.chat.entity;

import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "chat_room")
@Getter
@Setter
public class ChatRoom extends BaseTimeEntity {

    @Id
    @GeneratedValue
    @Column(name = "chat_room_id")
    private int id; //채팅방 id

//    @Column(name = "created_at")
//    private LocalDateTime createdAt; //생성일자

//    @OneToMany(mappedBy = "chatRoom")
//    private List<ChatRoomUser> chatRoomUsers; // 채팅방 입장 유저

}
