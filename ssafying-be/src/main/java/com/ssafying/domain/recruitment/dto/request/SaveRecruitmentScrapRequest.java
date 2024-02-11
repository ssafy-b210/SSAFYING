package com.ssafying.domain.recruitment.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class SaveRecruitmentScrapRequest {

    @NotNull(message = "유저 id는 필수 입력 항목입니다")
    int userId;

    @NotNull(message = "채용공고 id는 필수 입력 항목입니다")
    int recruitmentId;

}
