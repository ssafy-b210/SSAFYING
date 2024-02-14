package com.ssafying.domain.board.dto.request;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class AddBoardCommentRequest {

    int userId; //댓글 작성한 유저

    String content; //댓글 내용

    @Builder.Default
    Boolean isAnonymous = false; //익명 여부

    //    @NotNull
    int parentId; //부모 댓글
}