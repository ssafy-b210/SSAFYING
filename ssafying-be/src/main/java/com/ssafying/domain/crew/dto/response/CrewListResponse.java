package com.ssafying.domain.crew.dto.response;


import com.ssafying.domain.crew.entity.Category;
import com.ssafying.domain.crew.entity.Region;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class CrewListResponse {

    int crewId;
    String title;
    String content;
    String nickname;
    Region region;
    Category category;
    Boolean isRecruit;
}
