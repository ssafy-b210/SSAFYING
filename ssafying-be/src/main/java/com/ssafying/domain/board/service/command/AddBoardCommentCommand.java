package com.ssafying.domain.board.service.command;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class AddBoardCommentCommand {

    //    @NotNull
    private int userId; //댓글 작성한 유저

    private int boardId; // 댓글이 달린 게시글

    //    @NotNull
    private String content; //댓글 내용

    //    @NotNull
    private boolean isAnonymous; //익명 여부

    //    @NotNull
    private int parentId; //부모 댓글


}
