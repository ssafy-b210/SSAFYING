package com.ssafying.domain.meal.dto.request;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class VoteMealRequest {

    int userId;

    int mealPlannerId;
}
