package com.ssafying.domain.meal.repository.jdbc;

import com.ssafying.domain.meal.entity.MealOrderStatus;
import com.ssafying.domain.meal.entity.MealPlanner;
import com.ssafying.domain.meal.entity.MealVote;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MealVoteRepository extends JpaRepository<MealVote, Integer> {

    @Query("""
            select count(*)
            from MealVote mv
            where mv.user = :user
            and mv.mealPlanner = :mealPlanner
            and mv.order = :order
            """)
    public int findByUserAndMealPlannerAndOrder(@Param("user") User user, @Param("mealPlanner") MealPlanner mealPlanner, @Param("order") MealOrderStatus order);

    Optional<MealVote> findByUserAndMealPlanner(User user, MealPlanner mealPlanner);
}
