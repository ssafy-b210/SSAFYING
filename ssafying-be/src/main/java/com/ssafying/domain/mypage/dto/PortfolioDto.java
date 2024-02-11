package com.ssafying.domain.mypage.dto;

import com.ssafying.domain.mypage.entity.PortfolioType;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor()
public class PortfolioDto {

    Long id;
    String url;
    PortfolioType type;

}
