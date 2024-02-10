package com.ssafying.domain.board.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class ParentCommentDTO {
    //부모댓글, 댓글쓴유저, 자식댓글들
    String comment;
    String userName;
    boolean isAnonymous;
    LocalDateTime createdAt;
    List<ChildCommentDTO> childCommentList;

    public static ParentCommentDTO createParentComment(
            String comment,
            String userName,
            boolean isAnonymous,
            LocalDateTime createdAt
    ) {
        ParentCommentDTO parentComment = new ParentCommentDTO();

        parentComment.comment = comment;
        parentComment.userName = userName;
        parentComment.isAnonymous = isAnonymous;
        parentComment.createdAt = createdAt;

        return parentComment;
    }
}
