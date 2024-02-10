package com.ssafying.domain.crew.dto.response;

import com.ssafying.domain.crew.entity.CrewCategory;
import com.ssafying.domain.crew.entity.Region;
import com.ssafying.domain.user.entity.User;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class AddCrewResponse {

    int crewId;
    User userId;
    String title;
    String content;
    Region region;
    CrewCategory category;
    boolean status;
    LocalDateTime createdAt;
    LocalDateTime updatedAt;

}
