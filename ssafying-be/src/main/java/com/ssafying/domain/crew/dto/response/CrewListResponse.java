package com.ssafying.domain.crew.dto.response;


import com.ssafying.domain.crew.entity.CrewCategory;
import com.ssafying.domain.crew.entity.Region;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class CrewListResponse {

    int crewId;
    String title;
    Region region;
    CrewCategory category;
    boolean isRecruit;
}
