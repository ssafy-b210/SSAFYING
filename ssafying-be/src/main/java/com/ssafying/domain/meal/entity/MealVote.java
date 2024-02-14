package com.ssafying.domain.meal.entity;

import com.ssafying.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "meal_vote") // 식단표 투표
@Getter
public class MealVote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meal_vote_id")
    private int id; // 식단표 투표 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // 식단표에 투표한 유저

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "meal_planner_id")
    private MealPlanner mealPlanner; // 투표한 식단표 날짜 정보

    @Column(name = "menu_num")
    private MealOrderStatus order; // 투표한 메뉴 번호


    public static MealVote createMealVote(
            User user,
            MealPlanner mealPlanner,
            MealOrderStatus order) {
        MealVote mealVote = new MealVote();

        mealVote.user = user;
        mealVote.mealPlanner = mealPlanner;
        mealVote.order = order;

        return mealVote;
    }


}
