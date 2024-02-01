package com.ssafying.domain.board.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class AddBoardCommentRequest {

//    @NotNull
//    int userId; //댓글 작성한 유저

    @NotNull
    String content; //댓글 내용

    @NotNull
    boolean isAnonymous; //익명 여부

    @NotNull
    int parentId; //부모 댓글
}