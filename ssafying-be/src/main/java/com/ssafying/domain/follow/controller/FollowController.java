package com.ssafying.domain.follow.controller;

import com.ssafying.domain.follow.dto.request.AddFollowRequest;
import com.ssafying.domain.follow.dto.request.FindByNicknameRequest;
import com.ssafying.domain.follow.dto.request.UnFollowRequest;
import com.ssafying.domain.follow.dto.response.FindFollowerListResponse;
import com.ssafying.domain.follow.dto.response.FindFollowingListResponse;
import com.ssafying.domain.follow.entity.Follow;
import com.ssafying.domain.follow.service.FollowService;
import com.ssafying.global.config.jwt.TokenProvider;
import com.ssafying.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@Tag(name = "팔로우")
@CrossOrigin("*")
public class FollowController {

    private final FollowService followService;
    private final TokenProvider tokenProvider;

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
     * 2.3.1 팔로잉 리스트 - 닉네임 검색
     */
    @GetMapping("/following")
    public ResponseEntity<List<FindFollowingListResponse>> searchFollowingByNickname(
            @RequestBody FindByNicknameRequest request
            ){
        List<FindFollowingListResponse> responseList = followService.searchFollowingByNickname(request);

        return ResponseEntity.ok(responseList);
    }

    /**
     * 2.3.2 팔로워 리스트 - 닉네임 검색
     */
    @GetMapping("/follower")
    public ResponseEntity<List<FindFollowerListResponse>> searchFollowerByNickname(
            @RequestBody FindByNicknameRequest request
    ){
        List<FindFollowerListResponse> responseList = followService.searchFollowerByNickname(request);

        return ResponseEntity.ok(responseList);
    }


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
    @DeleteMapping("/unfollow/{userId}")
    public ResponseEntity<ResultResponse<Integer>> unFollow(@PathVariable(name = "userId")int userId,
                                                   @RequestHeader(value = "refreshToken") String token
                        ){
        // Access Token에서 유저 정보 추출
        int loginId = tokenProvider.getUserId(token);

        UnFollowRequest request = UnFollowRequest.builder()
                .fromUserId(loginId)
                .toUserId(userId)
                .build();

        int deletedUserId = followService.unFollow(request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, "언팔로우 되었습니다.", userId));
    }

}
