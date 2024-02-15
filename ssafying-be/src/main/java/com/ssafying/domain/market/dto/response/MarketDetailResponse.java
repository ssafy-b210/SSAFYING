package com.ssafying.domain.market.dto.response;

import com.ssafying.domain.market.entity.MarketImage;
import com.ssafying.domain.market.entity.MarketWay;
import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class MarketDetailResponse {

    String title;
    String nickname;
    MarketWay marketWay;
    boolean isSoldout;
    int price;
    String content;
    List<MarketImage> imageUrl;

    int userId;
}
