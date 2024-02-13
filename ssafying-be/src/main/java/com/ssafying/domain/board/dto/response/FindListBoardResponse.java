package com.ssafying.domain.board.dto.response;

import com.ssafying.domain.board.entity.CategoryStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class FindListBoardResponse {
    int boardId;

    String userName;

    String nickname;

    boolean isAnonymous;

    String title;

    String content;

    CategoryStatus category;

    LocalDateTime createAt;
}
