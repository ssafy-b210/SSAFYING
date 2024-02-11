package com.ssafying.domain.recruitment.dto.request;

import com.ssafying.domain.mypage.entity.PortfolioType;
import lombok.Getter;

@Getter
public class CreatePortfolioRequest {

    PortfolioType type;
    String url;

}
