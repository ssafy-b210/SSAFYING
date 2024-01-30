package com.ssafying.domain.board.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

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

    @NotNull(message = "는 필수입니다.")
    String category;

    @NotNull(message = "익명 여부는 필수입니다.")
    boolean isAnonymous;


}
