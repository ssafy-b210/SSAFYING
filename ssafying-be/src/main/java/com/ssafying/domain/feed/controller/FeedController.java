package com.ssafying.domain.feed.controller;

import com.ssafying.domain.feed.dto.FeedDto;
import com.ssafying.domain.feed.dto.request.*;
import com.ssafying.domain.feed.dto.response.GetFeedLikesResponse;
import com.ssafying.domain.feed.service.FeedService;
import com.ssafying.global.dto.ParentCommentDto;
import com.ssafying.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@Tag(name = "피드")
@CrossOrigin("*")
public class FeedController {

    private final FeedService feedService;

    /**
     * 3.1 피드 작성
     *
     */
    @PostMapping("/feeds")
    @Operation(summary = "피드 작성")
    public ResponseEntity<ResultResponse<Long>> feedAdd(@RequestBody @Valid AddFeedRequest request) {
        Long result = feedService.addFeed(request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 3.2 피드 삭제
     *
     */
    @DeleteMapping("/feeds/{feedId}")
    @Operation(summary = "피드 삭제")
    public ResponseEntity<ResultResponse<Integer>> feedRemove(@PathVariable(name = "feedId") int feedId) {
        int result =  feedService.removeFeed(feedId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 3.3 팔로잉한 유저 피드 조회
     *
     */
    @GetMapping("/feeds/{userId}/list")
    @Operation(summary = "팔로잉한 유저 피드 조회")
    public ResponseEntity<ResultResponse<List<FeedDto>>> feedList(@PathVariable(name = "userId") int userId) {
        List<FeedDto> feeds =  feedService.findFeed(userId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), feeds));
    }

    @GetMapping("/feeds/{userId}/recommend")
    @Operation(summary = "추천 피드 조회")
    public ResponseEntity<ResultResponse<List<FeedDto>>> recommendFeedList(@PathVariable(name = "userId") int userId) {
        List<FeedDto> feeds =  feedService.findRecommendFeed(userId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), feeds));
    }

    /**
     * 3.4 피드 상세조회
     *
     */
    @GetMapping("/feeds/{feedId}")
    @Operation(summary = "피드 상세조회")
    public ResponseEntity<ResultResponse<FeedDto>> feedDetails(@PathVariable(name = "feedId") int feedId) {
        FeedDto feed = feedService.findDetailFeed(feedId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), feed));
    }

    /**
     * 3.5 피드 좋아요
     *
     */
    @PostMapping("/feeds/like")
    @Operation(summary = "피드 좋아요")
    public ResponseEntity<ResultResponse<Integer>> feedLikeAdd(@RequestBody @Valid SaveLikeFeedRequest request) {
        int result = feedService.addFeedLike(request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 3.5.2 피드 좋아요 취소
     */
    @DeleteMapping("/feeds/like")
    @Operation(summary = "피드 좋아요 취소")
    public ResponseEntity<ResultResponse<Integer>> feedLikeRemove(@RequestBody @Valid SaveLikeFeedRequest request) {
        int result = feedService.removeFeedLike(request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 3.6 피드 좋아요 리스트
     *
     */
    @GetMapping("/feeds/{feedId}/like")
    @Operation(summary = "피드 좋아요 리스트")
    public ResponseEntity<ResultResponse<List<GetFeedLikesResponse>>> feedLikeList(@PathVariable(name = "feedId") int feedId) {
        List<GetFeedLikesResponse> resultList = feedService.findFeedLike(feedId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), resultList));
    }

    /**
     * 3.7 피드 검색
     *
     */
    @GetMapping("/feeds/search")
    @Operation(summary = "피드 검색")
    public ResponseEntity<ResultResponse<List<FeedDto>>> feed(
            @RequestParam(name = "hashtag", required = false) List<String> hashtag
    ){
        List<FeedDto> resultList = feedService.searchFeed(hashtag);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), resultList));
    }


    /**
     * 3.8 피드 수정
     *
     */
    @PutMapping("/feeds/{feedId}")
    @Operation(summary = "피드 수정")
    public ResponseEntity<ResultResponse<Integer>> feedModify(@PathVariable(name = "feedId") int feedId, @RequestBody @Valid ModifyFeedRequest request) {
        int result = feedService.modifyFeed(feedId, request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 3.9.1 피드 스크랩
     *
     */
    @PostMapping("/feeds/scrap")
    @Operation(summary = "피드 스크랩")
    public ResponseEntity<ResultResponse<Integer>> feedScrapAdd(@RequestBody @Valid SaveFeedScrapRequest request) {

        int result = feedService.addFeedScrap(request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 3.9.2 피드 스크랩 취소
     *
     */
    @DeleteMapping("/feeds/scrap")
    @Operation(summary = "피드 스크랩 취소")
    public ResponseEntity<ResultResponse<Integer>> feedScrapRemove(@RequestBody @Valid SaveFeedScrapRequest request) {

        int result = feedService.removeFeedScrap(request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 3.10.0 피드 댓글 조회
     * 
     */
    @GetMapping("feeds/{feedId}/comments")
    @Operation(summary = "피드 댓글 조회")
    public ResponseEntity<ResultResponse<List<ParentCommentDto>>> feedCommentList(@PathVariable(name = "feedId") int feedId) {
        List<ParentCommentDto> result = feedService.findFeedList(feedId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 3.10 피드 댓글 작성
     *
     */
    @PostMapping("feeds/{feedId}/comments")
    @Operation(summary = "피드 댓글 작성")
    public ResponseEntity<ResultResponse<Integer>> feedCommentAdd(@PathVariable(name = "feedId") int feedId, @RequestBody AddCommentRequest request) {
        int result = feedService.addFeedComment(feedId, request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 3.11 피드댓글 삭제
     *
     */
    @DeleteMapping("feeds/comments/{commentId}")
    @Operation(summary = "피드 댓글 삭제")
    public ResponseEntity<ResultResponse<Integer>> feedCommentRemove(@PathVariable(name = "commentId") int commentId) {
        int result = feedService.removeFeedComment(commentId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 3.12.1 피드댓글 좋아요
     *
     */
    @PostMapping("feeds/comments/like/{commentId}")
    @Operation(summary = "피드 좋아요")
    public ResponseEntity<ResultResponse<Integer>> feedCommentLikeAdd(@RequestBody SaveFeedCommentLikeRequest request) {
        int result = feedService.addFeedCommentLike(request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 3.12 피드댓글 좋아요 삭제
     *
     */
    @DeleteMapping("feeds/comments/like/{commentId}")
    @Operation(summary = "피드 댓글 좋아요 삭제")
    public ResponseEntity<ResultResponse<Integer>> feedCommentLikeRemove(@RequestBody SaveFeedCommentLikeRequest request) {
        int result = feedService.removeFeedCommentLike(request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }
}
