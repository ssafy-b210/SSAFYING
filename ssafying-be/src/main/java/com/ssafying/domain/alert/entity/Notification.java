package com.ssafying.domain.alert.entity;

import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "notifications")
@Getter
public class Notification extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notification_id")
    private Long id; // 알림 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id")
    private User senderId; // 알림 보내는 사람 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "receiver_id")
    private User receiverId; // 알림 받는 사람 id

    @Enumerated(EnumType.STRING)
    @Column(name = "notification_type")
    private NotificationTypeStatus notificationType; // 알림 종류

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "chat_room_id")
//    private ChatRoom chatRoomId; // 채팅방 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feed_id")
    private Feed feedId; // 피드 id // dm 보낸 경우 채팅방 id 저장

    private Boolean isRead; // 알림 확인 여부 // like, comment 알림인 경우 feed id 저장


    public static Notification createNotification(
            User senderId,
            User receiverId,
            NotificationTypeStatus notificationType,
            Feed feedId
    ) {
        Notification notification = new Notification();

        notification.senderId = senderId;
        notification.receiverId = receiverId;
        notification.notificationType = notificationType;
        notification.feedId = feedId;

        return notification;
    }
}
