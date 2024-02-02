package com.ssafying.domain.board.dto.request;

import com.ssafying.domain.board.dto.ParentCommentDTO;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Getter
public class DetailBoardResponse {

    //title, content, isScrap, userName, createdAt,
    //comments(댓글, 댓글유저, 대댓글, 대댓글유저)
    String title;

    String content;

    boolean isScrap;

    String userName;

    LocalDateTime createdAt;

    List<ParentCommentDTO> comments;

}

