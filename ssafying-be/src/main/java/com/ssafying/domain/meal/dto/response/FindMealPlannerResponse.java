package com.ssafying.domain.meal.dto.response;

import com.ssafying.domain.meal.entity.MealOrderStatus;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class FindMealPlannerResponse {

    //mealOrder
    private MealOrderStatus mealOrder;

    //vote
    private int vote;

    //id
    private int mealPlannerId;

    //menu
    private String menu;

//    //campus
//    private Campus campus;

//    //date
//    private LocalDate mealPlannerDate;
}
