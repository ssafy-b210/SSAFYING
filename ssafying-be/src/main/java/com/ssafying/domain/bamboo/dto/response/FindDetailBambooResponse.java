package com.ssafying.domain.bamboo.dto.response;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Builder
public class
FindDetailBambooResponse {
    Long bambooId;

    int userId;

    String content;

    LocalDateTime createdAt;

    List<BambooCommentResponse> comments;
}
