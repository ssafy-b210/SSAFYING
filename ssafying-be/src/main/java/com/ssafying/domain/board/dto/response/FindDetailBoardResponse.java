package com.ssafying.domain.board.dto.response;

import com.ssafying.domain.board.dto.ParentCommentDTO;
import com.ssafying.domain.board.entity.CategoryStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
@Getter
public class FindDetailBoardResponse {
    String userName;

    String title;

    String content;

    CategoryStatus category;

    boolean isAnonymous;

    LocalDateTime createAt;

    List<ParentCommentDTO> comments = new ArrayList<>();

}
