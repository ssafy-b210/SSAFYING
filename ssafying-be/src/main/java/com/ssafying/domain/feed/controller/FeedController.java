package com.ssafying.domain.feed.controller;

import com.ssafying.domain.feed.dto.request.*;
import com.ssafying.domain.feed.dto.response.GetFeedLikesResponse;
import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.feed.service.FeedService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class FeedController {

    private final FeedService feedService;

    /**
     * 3.1 피드 작성
     *
     */
    @PostMapping("/feeds")
    public ResponseEntity<Integer> feedAdd(@RequestBody @Valid AddFeedRequest request) {
        int result = feedService.addFeed(request);
        return ResponseEntity.ok(result);
    }

    /**
     * 3.2 피드 삭제
     *
     */
    @DeleteMapping("/feeds/{feedId}")
    public ResponseEntity<String> feedRemove(@PathVariable int feedId) {
        int deletedFeedId =  feedService.removeFeed(feedId);
        
        return ResponseEntity.ok(deletedFeedId+"번 피드 삭제");
    }

    /**
     * 3.3 피드 전체조회
     *
     */
    @GetMapping("/feeds")
    public ResponseEntity<List<Feed>> feedList() {
        List<Feed> feeds =  feedService.findFeed();
        return ResponseEntity.ok(feeds);
    }

    /**
     * 3.4 피드 상세조회
     *
     */
    @GetMapping("/feeds/{feedId}")
    public ResponseEntity<Feed> feedDetails(@PathVariable int feedId) {
        Feed feed = feedService.findDetailFeed(feedId);
        return ResponseEntity.ok(feed);
    }

    /**
     * 3.5 피드 좋아요
     *
     */
    @PostMapping("/feeds/like")
    public ResponseEntity<Integer> feedLikeAdd(@RequestBody @Valid SaveLikeFeedRequest request) {
        int res = feedService.addFeedLike(request);
        return ResponseEntity.ok(res);
    }

    /**
     * 3.5.2 피드 좋아요 취소
     */
    @DeleteMapping("/feeds/like")
    public ResponseEntity<Integer> feedLikeRemove(@RequestBody @Valid SaveLikeFeedRequest request) {
        int res = feedService.removeFeedLike(request);
        return ResponseEntity.ok(res);
    }

    /**
     * 3.6 피드 좋아요 리스트
     *
     */
    @GetMapping("/feeds/{feedId}/like")
    public ResponseEntity<List<GetFeedLikesResponse>> feedLikeList(@PathVariable int feedId) {
        List<GetFeedLikesResponse> resultList = feedService.findFeedLike(feedId);
        return ResponseEntity.ok(resultList);
    }

    /**
     * 3.7 피드 검색
     *
     */

    /**
     * 3.8 피드 수정
     *
     */
    @PutMapping("/feeds/{feedId}")
    public ResponseEntity<Integer> feedModify(@PathVariable int feedId, @RequestBody ModifyFeedRequest request) {
        feedService.modifyFeed(feedId, request);
        return ResponseEntity.ok(1);
    }

    /**
     * 3.9.1 피드 스크랩
     *
     */
    @PostMapping("/feeds/scrap")
    public ResponseEntity<Integer> feedScrapAdd(@RequestBody SaveFeedScrapRequest request) {

        int result = feedService.addFeedScrap(request);

        return ResponseEntity.ok(result);
    }
    
    /**
     * 3.9.2 피드 스크랩 취소
     *
     */
    @DeleteMapping("/feeds/scrap")
    public ResponseEntity<Integer> feedScrapRemove(@RequestBody SaveFeedScrapRequest request) {

        int result = feedService.removeFeedScrap(request);

        return ResponseEntity.ok(result);
    }

    /**
     * 3.10 피드 댓글 작성
     *
     */
    @PostMapping("feeds/{feedId}/comments")
    public ResponseEntity<Integer> feedCommentAdd(@PathVariable int feedId, @RequestBody AddCommentRequest request) {
        int result = feedService.addFeedComment(feedId, request);
        return ResponseEntity.ok(result);
    }

    /**
     * 3.11 피드댓글 삭제
     *
     */
    @DeleteMapping("feeds/comments/like/{commentId}")
    public ResponseEntity<Integer> feedCommentRemove(@PathVariable int commentId) {
        int result = feedService.removeFeedComment(commentId);
        return ResponseEntity.ok(result);
    }

    /**
     * 3.12.1 피드댓글 좋아요
     *
     */
    @PostMapping("feeds/comments/like/{commentId}")
    public ResponseEntity<Integer> feedCommentLikeAdd(@RequestBody SaveFeedCommentLikeRequest request) {
        int result = feedService.addFeedCommentLike(request);
        return ResponseEntity.ok(result);
    }

    /**
     * 3.12 피드댓글 좋아요 삭제
     *
     */
    @DeleteMapping("feeds/comments/{commentId}")
    public ResponseEntity<Integer> feedCommentLikeRemove(@RequestBody SaveFeedCommentLikeRequest request) {
        int result = feedService.removeFeedCommentLike(request);
        return ResponseEntity.ok(result);
    }
}
