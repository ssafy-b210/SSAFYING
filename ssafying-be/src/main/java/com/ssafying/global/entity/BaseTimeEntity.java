package com.ssafying.global.entity;

import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseTimeEntity{

    // Entity가 생성되어 저장될 때 시간이 자동 저장됨
    @CreatedDate
    private LocalDateTime createdAt;

    // 조회한 Entity 값을 변경할 때 시간이 자동 저장됨
    @LastModifiedDate
    private LocalDateTime updatedAt;

}
