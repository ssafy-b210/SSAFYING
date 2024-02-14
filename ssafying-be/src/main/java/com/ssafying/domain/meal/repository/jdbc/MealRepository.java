package com.ssafying.domain.meal.repository.jdbc;

import com.ssafying.domain.meal.entity.MealOrderStatus;
import com.ssafying.domain.meal.entity.MealPlanner;
import com.ssafying.domain.shuttle.entity.Campus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface MealRepository extends JpaRepository<MealPlanner, Integer> {
    Optional<MealPlanner> findByMealPlannerDateAndCampusAndMealOrder(LocalDate mealPlannerDate, Campus campus, MealOrderStatus mealOrder);

    List<MealPlanner> findByMealPlannerDateAndCampus(LocalDate now, Campus campeus);
}
