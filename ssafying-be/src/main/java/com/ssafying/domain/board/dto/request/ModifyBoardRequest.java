package com.ssafying.domain.board.dto.request;

import com.ssafying.domain.board.entity.CategoryStatus;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Getter
public class ModifyBoardRequest {

    CategoryStatus category;
    Boolean isAnonymous;
    private String title;
    private String content;

}
