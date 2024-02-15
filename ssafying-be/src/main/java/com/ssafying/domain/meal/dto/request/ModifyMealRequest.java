package com.ssafying.domain.meal.dto.request;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Getter
public class ModifyMealRequest {
    private String menu;
}
