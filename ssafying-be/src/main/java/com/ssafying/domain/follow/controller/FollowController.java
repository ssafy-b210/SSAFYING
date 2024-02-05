package com.ssafying.domain.follow.controller;

import com.ssafying.domain.follow.dto.request.AddFollowRequest;
import com.ssafying.domain.follow.dto.response.FindFollowerListResponse;
import com.ssafying.domain.follow.dto.response.FindFollowingListResponse;
import com.ssafying.domain.follow.entity.Follow;
import com.ssafying.domain.follow.service.FollowService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@Tag(name = "팔로우")
public class FollowController {

    private final FollowService followService;

    /**
     * 2.1 팔로잉 조회
     * userId 가 팔로우 하고 있는 유저 목록
     */
    @GetMapping("/following/{userId}")
    public ResponseEntity<List<FindFollowingListResponse>> getFollowingList(@PathVariable(name = "userId") int userId){
        List<FindFollowingListResponse> result = followService.followingList(userId);

        return ResponseEntity.ok(result);
    }

    /**
     * 2.2 팔로워 조회
     * userId를 팔로우하는 유저 목록
     */
    @GetMapping("/followers/{userId}")
    public ResponseEntity<List<FindFollowerListResponse>> getFollowerList(@PathVariable(name = "userId") int userId){
        List<FindFollowerListResponse> result = followService.followerList(userId);

        return ResponseEntity.ok(result);
    }

    /**
     * 2.3 회원 검색
     */

    /**
     * 2.4 팔로우
     */
    @PostMapping("/follow")
    public Follow follow(@RequestBody AddFollowRequest request){

        Follow follow = followService.follow(request);

        return follow;
    }

    /**
     * 2.5 언팔로우
     */

}
