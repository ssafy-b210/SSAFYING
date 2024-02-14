package com.ssafying.domain.chat.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "message_unread_user")
@Getter
public class MessageUnreadUser {

    @Id
    @GeneratedValue
    @Column(name = "message_unread_user_id")
    private Long id;



}
