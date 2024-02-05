package com.ssafying.domain.follow.controller;

import com.ssafying.domain.follow.dto.AddFollowRequest;
import com.ssafying.domain.follow.entity.Follow;
import com.ssafying.domain.follow.repository.jdbc.FollowRepository;
import com.ssafying.domain.follow.service.FollowService;
import com.ssafying.domain.user.service.UserService;
import com.ssafying.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.transform.Result;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@Tag(name = "팔로우")
public class FollowController {

    private final FollowService followService;

    /**
     * 2.1 팔로잉 조회
     */

    /**
     * 2.2 팔로워 조회
     */

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
