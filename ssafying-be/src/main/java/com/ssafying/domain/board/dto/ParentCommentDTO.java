package com.ssafying.domain.board.dto;

import java.util.List;

public class ParentCommentDTO {
    //부모댓글, 댓글쓴유저, 자식댓글들
    String comment;
    String userName;

    List<ChildCommentDTO> childCommentList;
}
