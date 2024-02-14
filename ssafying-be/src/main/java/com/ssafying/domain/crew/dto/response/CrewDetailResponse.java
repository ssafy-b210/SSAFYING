package com.ssafying.domain.crew.dto.response;

import com.ssafying.domain.crew.entity.Category;
import com.ssafying.domain.crew.entity.CrewComment;
import com.ssafying.domain.crew.entity.Region;
import com.ssafying.global.dto.ParentCommentDto;
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
    Category category;
    Boolean isRecruit;
    List<ParentCommentDto> parentCommentList;


}
