package com.ssafying.domain.meal.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class FindMealPlannerResponse {

    //mealOrder
//    private MealOrderStatus mealOrder;

    //vote
    private int vote;

    //id
    private int mealPlannerId;

    //menu
    private String menu;

    //투표 여부
    Boolean isVoted;
}
