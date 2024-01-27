package com.ssafying.domain.board.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CreateArticleRequest {

    @NotNull(message = "유저 PK는 필수입니다.")
    int userId;

    @NotNull(message = "제목은 필수입니다.")
    String title;

    @NotNull(message = "게시글 내용은 필수입니다.")
    String content;

    //카테고리가 필수일까
//    @NotNull(message = "는 필수입니다.")
    String category;

    @NotNull(message = "익명 여부는 필수입니다.")
    boolean isAnonymous;
}
