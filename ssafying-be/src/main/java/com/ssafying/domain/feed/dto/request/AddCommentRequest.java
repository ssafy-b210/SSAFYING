package com.ssafying.domain.feed.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AddCommentRequest {

    @NotNull(message = "유저 id는 필수 입력 항목입니다")
    int userId;

    @NotNull(message = "댓글 내용은 필수 입력 항목입니다")
    String content;

    @Builder.Default
    Integer parentId = null;
}
