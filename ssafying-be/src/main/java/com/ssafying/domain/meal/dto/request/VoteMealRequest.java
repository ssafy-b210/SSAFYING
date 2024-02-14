package com.ssafying.domain.meal.dto.request;

import com.ssafying.domain.meal.entity.MealOrderStatus;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class VoteMealRequest {

    int userId;

    int mealPlannerId;

    MealOrderStatus order;
}
