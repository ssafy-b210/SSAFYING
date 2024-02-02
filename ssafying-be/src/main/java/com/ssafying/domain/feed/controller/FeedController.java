package com.ssafying.domain.feed.controller;

import com.ssafying.domain.feed.dto.request.CreateFeedRequest;
import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.feed.service.FeedService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class FeedController {

    private final FeedService feedService;

    @PostMapping("/feeds")
    public ResponseEntity<String> createFeed(@RequestBody CreateFeedRequest request) {
        feedService.createFeed(request);
        return ResponseEntity.ok("good");
    }

//    @GetMapping("/feeds")
//    public ResponseEntity<List<Feed>> getFeeds() {
//        List<Feed> feeds =  feedService.getFeeds();
//        return ResponseEntity.ok(feeds);
//    }

}
