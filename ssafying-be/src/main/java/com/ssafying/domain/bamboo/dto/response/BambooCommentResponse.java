package com.ssafying.domain.bamboo.dto.response;

import lombok.*;

import java.time.LocalDateTime;

@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class BambooCommentResponse {

    String content;

    LocalDateTime createAt;


}
