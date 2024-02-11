package com.ssafying.domain.meal.repository.jdbc;

import com.ssafying.domain.meal.entity.MealPlanner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealRepository extends JpaRepository<MealPlanner, Integer> {
}
