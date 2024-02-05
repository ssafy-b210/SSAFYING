package com.ssafying.domain.board.dto.request;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Getter
public class ModifyBoardCommentRequest {

    //    @NotNull
    private String content; //댓글 내용

    //    @NotNull
    private Boolean isAnonymous; //익명 여부
}
