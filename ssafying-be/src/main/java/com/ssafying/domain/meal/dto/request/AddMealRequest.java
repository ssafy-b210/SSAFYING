package com.ssafying.domain.meal.dto.request;

import com.ssafying.domain.meal.entity.MealOrderStatus;
import com.ssafying.domain.shuttle.entity.CampusRegion;
import lombok.*;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class AddMealRequest {

    private CampusRegion campusRegion; // 캠퍼스 지역

    private LocalDate mealPlannerDate; // 식단표 날짜

    private MealOrderStatus mealOrder; // 몇번째 메뉴인지

    private String menu; // 식단표 메뉴

}
