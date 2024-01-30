package com.ssafying.domain.crew.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UpdateCrewRequest {

    @NotBlank(message = "게시글 id는 필수입니다.")
    int crewId;

//    @NotBlank(message = "유저 PK는 필수입니다.")
//    int userId;

    String title;

    String content;

    boolean isRecruit;


}
