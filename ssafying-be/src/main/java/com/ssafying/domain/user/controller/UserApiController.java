package com.ssafying.domain.user.controller;

import com.ssafying.domain.user.dto.request.CreateUserRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserApiController {

    private final UserService userService;

    /*
     * 1.1 회원가입
     */
    @PostMapping("/signup")
    public User userCreate(@RequestBody @Valid CreateUserRequest request){

        User user = userService.createUser(request);

        return user;

    }

    /*
     * 1.4 회원 정보 조회
     */
    @GetMapping("/users/{userId}")
    public User userDetail(int userId){

        User user = userService.DetailUser(userId);

        return user;

    }


}
