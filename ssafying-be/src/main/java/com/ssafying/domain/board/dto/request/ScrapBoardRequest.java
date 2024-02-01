package com.ssafying.domain.board.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ScrapBoardRequest {

//    @NotNull(message = "user id는 필수입니다.")
//    int userId;

    @NotNull(message = "게시글 id는 필수입니다.")
    int boardId;
}
