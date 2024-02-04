package com.ssafying.domain.market.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ModifyMarketRequest {

    @NotNull(message = "거래방식 선택은 필수입니다.")
    MarketWay marketWay;

    @NotNull(message = "거래완료 여부 선택은 필수입니다.")
    Boolean isSoldout;

    //    @NotNull(message = "금액 입력은 필수입니다.")
    int price;

    @NotNull(message = "제목 입력은 필수입니다.")
    String title;

    @NotNull(message = "내용 입력은 필수입니다.")
    String content;

}
