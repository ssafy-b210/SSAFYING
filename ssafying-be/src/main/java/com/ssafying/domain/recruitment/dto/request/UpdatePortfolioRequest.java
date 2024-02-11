package com.ssafying.domain.recruitment.dto.request;

import com.ssafying.domain.mypage.entity.PortfolioType;
import lombok.Getter;

@Getter
public class UpdatePortfolioRequest {

    //pk, type, url
    int portfolioId;
    PortfolioType type;
    String url;

}
