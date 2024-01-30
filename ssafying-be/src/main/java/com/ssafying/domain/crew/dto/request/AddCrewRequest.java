package com.ssafying.domain.crew.dto.request;

import com.ssafying.domain.crew.entity.Category;
import com.ssafying.domain.crew.entity.Region;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Builder
public class AddCrewRequest {

    @NotBlank(message = "유저 PK는 필수입니다.")
    int userId;

    @NotBlank(message = "제목은 필수입니다.")
    String title;

    @NotBlank(message = "게시글 내용은 필수입니다.")
    String content;

    @NotBlank(message = "지역 선택은 필수입니다.")
    Region region;

    @NotBlank(message = "카테고리 선택은 필수입니다.")
    Category category;

    @NotBlank(message = "모집 여부 체크는 필수입니다.")
    boolean isRecruit;

}
