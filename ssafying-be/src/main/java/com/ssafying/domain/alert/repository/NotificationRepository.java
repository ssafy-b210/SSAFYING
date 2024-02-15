package com.ssafying.domain.alert.repository;

import com.ssafying.domain.alert.entity.Notification;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {


//    @Query("""
//            select n
//            from notifications n
//            where
//            """)
List<Notification> findByReceiverUserOrderByCreatedAtDesc(User receiverUser);
}
