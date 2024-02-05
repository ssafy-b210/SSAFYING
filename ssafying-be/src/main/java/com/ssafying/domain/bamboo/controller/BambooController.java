package com.ssafying.domain.bamboo.controller;

import com.ssafying.domain.bamboo.dto.request.AddBambooCommentRequest;
import com.ssafying.domain.bamboo.dto.request.AddBambooRequest;
import com.ssafying.domain.bamboo.dto.response.FindDetailBambooResponse;
import com.ssafying.domain.bamboo.dto.response.FindListBambooResponse;
import com.ssafying.domain.bamboo.service.BambooService;
import com.ssafying.global.result.ResultResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bamboo")
public class BambooController {

    private final BambooService bambooService;

    /**
     * 4.1 대나무숲 조회
     */
    @GetMapping
    public ResponseEntity<ResultResponse<List<FindListBambooResponse>>> bambooList() {

        List<FindListBambooResponse> result = bambooService.findListBamboo();

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 4.2 대나무숲 작성
     */
    @PostMapping
    public ResponseEntity<ResultResponse<Long>> bambooAdd(
            @RequestBody @Valid AddBambooRequest request) {

        Long result = bambooService.addBamboo(request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }


    /**
     * 4.3 대나무숲 상세 조회
     */
    @GetMapping("/{bambooId}")
    public ResponseEntity<ResultResponse<FindDetailBambooResponse>> bambooDetails(
            @PathVariable(name = "bambooId") Long bambooId) {

        FindDetailBambooResponse result = bambooService.findDetailBamboo(bambooId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 4.4 대나무숲 댓글 작성
     */
    @PostMapping("/comments/{bambooId}")
    public ResponseEntity<ResultResponse<Long>> bambooCommentAdd(
            @PathVariable(name = "bambooId") Long bambooId,
            @RequestBody AddBambooCommentRequest request) {

        Long result = bambooService.addBambooComment(bambooId, request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }


    /**
     * 4.5 대나무숲 댓글 삭제
     */
    @DeleteMapping("/comments/{bambooCommentId}")
    public ResponseEntity<ResultResponse<String>> bambooCommentRemove(
            @PathVariable(name = "bambooCommentId") Long bambooCommentId) {

        String result = bambooService.removeBambooComment(bambooCommentId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }


    /**
     * 4.6 대나무숲 글 신고
     */
    @PostMapping("/reports/{bambooId}")
    public ResponseEntity<ResultResponse<Integer>> bambooReportAdd(
            @PathVariable(name = "bambooId") Long bambooId) {

        int result = bambooService.addBambooReport(bambooId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }


    /**
     * 4.7 대나무숲 댓글 신고
     */
    @PostMapping("/reports/comments/{bambooCommentId}")
    public ResponseEntity<ResultResponse<Integer>> boardAdd(
            @PathVariable(name = "bambooCommentId") Long bambooCommentId) {

        int result = bambooService.addBambooCommentReport(bambooCommentId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }


}
