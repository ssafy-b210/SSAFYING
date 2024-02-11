package com.ssafying.domain.crew.dto.request;

import com.ssafying.domain.crew.entity.Category;
import com.ssafying.domain.crew.entity.Region;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddCrewRequest {

    int userId;

    String title;

    String content;

    Region region;

    Category category;

    Boolean isRecruit;

}
