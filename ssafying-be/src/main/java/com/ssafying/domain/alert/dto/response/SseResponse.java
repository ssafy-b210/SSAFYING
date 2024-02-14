package com.ssafying.domain.alert.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class SseResponse {
    int receiverId;

    String nickname;

    String imgUrl;

    LocalDateTime createdAt;

    Long feedId;

}
