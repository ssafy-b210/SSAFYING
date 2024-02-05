package com.ssafying.domain.crew.dto.request;

import com.ssafying.domain.crew.entity.CrewCategory;
import com.ssafying.domain.crew.entity.Region;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddCrewRequest {

    @NotNull(message = "유저 PK는 필수입니다.")
    int userId;

    @NotNull(message = "제목은 필수입니다.")
    String title;

    @NotNull(message = "게시글 내용은 필수입니다.")
    String content;

    @NotNull(message = "지역 선택은 필수입니다.")
    Region region;

    @NotNull(message = "카테고리 선택은 필수입니다.")
    CrewCategory category;

    @NotNull(message = "모집 여부 체크는 필수입니다.")
    Boolean isRecruit;

}
