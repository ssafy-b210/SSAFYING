package com.ssafying.domain.feed.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CreateCommentRequest {

    @NotNull(message = "피드 id는 필수 입력 항목입니다")
    int feedId;

    @NotNull(message = "유저 id는 필수 입력 항목입니다")
    int userId;

    @NotNull(message = "댓글 내용은 필수 입력 항목입니다")
    String content;

    int parentId;
}
