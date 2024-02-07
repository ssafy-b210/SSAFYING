package com.ssafying.domain.mypage.dto.request;

import com.ssafying.domain.mypage.entity.PortfolioType;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class SavePortfolioRequest {
    
    @NotNull(message = "포트폴리오 url은 필수 입력 항목입니다")
    String portfolioUrl;

    PortfolioType type;

}
