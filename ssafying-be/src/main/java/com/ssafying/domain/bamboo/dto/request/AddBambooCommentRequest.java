package com.ssafying.domain.bamboo.dto.request;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class AddBambooCommentRequest {

    int userId; // 댓글 작성한 유저

    String content; // 댓글 내용

}
