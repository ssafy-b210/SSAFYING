package com.ssafying.domain.board.dto.request;

import com.ssafying.domain.board.entity.CategoryStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;

@Getter
//@AllArgsConstructor
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class CreateBoardRequest {

    @NotNull(message = "유저 PK는 필수입니다.")
    int userId;

    @NotNull(message = "제목은 필수입니다.")
    String title;

    @NotNull(message = "게시글 내용은 필수입니다.")
    String content;

    @NotNull(message = "category 는 필수입니다.")
    CategoryStatus category;

    @NotNull(message = "익명 여부는 필수입니다.")
    boolean isAnonymous;


}
