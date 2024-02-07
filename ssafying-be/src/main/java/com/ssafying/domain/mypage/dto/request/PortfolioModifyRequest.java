package com.ssafying.domain.mypage.dto.request;

import com.ssafying.domain.mypage.entity.PortfolioType;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class PortfolioModifyRequest {

    @NotNull(message = "포트폴리오 pk는 필수 입력 값입니다")
    int portfolioId;

    String portfolioUrl;

    PortfolioType type;

}
