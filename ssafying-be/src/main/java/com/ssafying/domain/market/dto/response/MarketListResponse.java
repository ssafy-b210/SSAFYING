package com.ssafying.domain.market.dto.response;

import com.ssafying.domain.market.entity.MarketWay;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class MarketListResponse {

    int marketId;
    MarketWay marketWay;
    String title;
    String nickname;
    int price;
    boolean isSoldout;
    String content;

}
