package com.ssafying.domain.board.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class ChildCommentDTO {
    int commentId;
    String profileImgUrl;
    String comment;
    String nickname;
    String userName;
    boolean isAnonymous;
    LocalDateTime createdAt;


    public static ChildCommentDTO createChileComment(
            String comment,
            String userName,
            boolean isAnonymous,
            LocalDateTime createdAt

    ) {
        ChildCommentDTO childComment = new ChildCommentDTO();

        childComment.comment = comment;
        childComment.userName = userName;
        childComment.isAnonymous = isAnonymous;
        childComment.createdAt = createdAt;

        return childComment;
    }
}
