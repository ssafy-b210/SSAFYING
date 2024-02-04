package com.ssafying.domain.crew.dto.response;

import com.ssafying.domain.crew.entity.CrewCategory;
import com.ssafying.domain.crew.entity.Region;
import com.ssafying.domain.user.entity.User;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class AddCrewResponse {

    private int crewId;
    private User userId;
    private String title;
    private String content;
    private Region region;
    private CrewCategory category;
    private boolean status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
