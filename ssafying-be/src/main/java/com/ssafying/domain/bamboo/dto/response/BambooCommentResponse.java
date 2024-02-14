package com.ssafying.domain.bamboo.dto.response;

import lombok.*;

import java.time.LocalDateTime;

@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class BambooCommentResponse {

    int userId;

    Long commentId;

    String content;

    LocalDateTime createAt;


}
