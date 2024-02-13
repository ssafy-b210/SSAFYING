package com.ssafying.domain.alert.repository;

import com.ssafying.domain.alert.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Long> {


}
