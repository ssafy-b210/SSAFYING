package com.ssafying.domain.crew.dto.response;

import com.ssafying.domain.crew.entity.CrewCategory;
import com.ssafying.domain.crew.entity.CrewComment;
import com.ssafying.domain.crew.entity.Region;
import com.ssafying.domain.user.entity.User;
import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class CrewDetailResponse {

    int crewId;
    String title;
    String nickname;
    String content;
    Region region;
    CrewCategory category;
    Boolean isRecruit;
    List<CrewComment> comments;


}
