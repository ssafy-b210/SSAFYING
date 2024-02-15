package com.ssafying.domain.meal.entity;

import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDate;

@Entity
@Table(name = "meal_planner") //자유게시판
@Getter
public class MealPlanner extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meal_planner_id")
    private int id; // 식단표 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "campus_id")
    private Campus campus; // 캠퍼스 id

    @Column(name = "meal_planner_date")
    private LocalDate mealPlannerDate; // 식단표 날짜

//    @Enumerated(EnumType.STRING)
//    private MealOrderStatus mealOrder; // 몇번째 메뉴인지

    //서울은 층 수도 고려해줘야 하려나...
    //일단 대전을 기준으로 생각하겠음
    //추가로 원래는 메뉴별로 데이터를 만들려고 했었어서 table을 따로 뺐었는데
    //ocr을 써서 텍스트로 추출을 못할 것 같다고 해서 개행으로만 구분해서 저장하고 하나의 칼럼에 다 때려넣도록 함
    private String menu; // 식단표 메뉴

    private int vote; // 메뉴 득표 수

    // 생성일자, 수정일자


    public static MealPlanner createMeal(
            Campus campus,
            LocalDate mealPlannerDate,
//            MealOrderStatus mealOrder,
            String menu,
            int vote) {
        MealPlanner meal = new MealPlanner();

        meal.campus = campus;
        meal.mealPlannerDate = mealPlannerDate;
//        meal.mealOrder = mealOrder;
        meal.menu = menu;
        meal.vote = vote;

        return meal;
    }

    public void modifyMeal(String menu) {
        this.menu = menu;
    }

    public void modifyMealVote() {
        this.vote += 1;
    }


}
