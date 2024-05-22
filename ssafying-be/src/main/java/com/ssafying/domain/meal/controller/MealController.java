package com.ssafying.domain.meal.controller;

import com.ssafying.domain.meal.dto.request.AddMealRequest;
import com.ssafying.domain.meal.dto.request.ModifyMealRequest;
import com.ssafying.domain.meal.dto.request.VoteMealRequest;
import com.ssafying.domain.meal.dto.response.FindMealPlannerResponse;
import com.ssafying.domain.meal.service.MealService;
import com.ssafying.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/meal")
@Tag(name = "식단표")
@CrossOrigin("*")
public class MealController {

    private final MealService mealService;

    /**
     * 13.1 식단표 생성
     */
    @PostMapping
    @Operation(summary = "식단표 생성")
    public ResponseEntity<ResultResponse<Integer>> mealAdd(
            @RequestBody AddMealRequest request) {
        int result = mealService.addMeal(request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }


    /**
     * 13.2 식단표 메뉴 수정
     */
    @PatchMapping("/{mealPlannerId}")
    @Operation(summary = "식단표 메뉴 수정")
    public ResponseEntity<ResultResponse<Integer>> mealModify(
            @PathVariable(name = "mealPlannerId") int mealPlannerId,
            @RequestBody ModifyMealRequest request) {
        int result = mealService.modifyMeal(mealPlannerId, request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }


    /**
     * 13.3 식단표 메뉴 투표
     */
    @PostMapping("/vote")
    @Operation(summary = "식단표 메뉴 투표")
    public ResponseEntity<ResultResponse<Integer>> mealVote(
            @RequestBody @Valid VoteMealRequest request
    ) {
        int result = mealService.voteMeal(request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 13.4 식단표 조회
     */
    @GetMapping("/{userId}")
    @Operation(summary = "식단표 조회")
    public ResponseEntity<ResultResponse<List<FindMealPlannerResponse>>> mealPlannerList(
            @PathVariable(name = "userId") int userId
    ) {
        System.out.println("MealController.mealPlannerList");
        List<FindMealPlannerResponse> result = mealService.findMealPlannerList(userId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }
}
