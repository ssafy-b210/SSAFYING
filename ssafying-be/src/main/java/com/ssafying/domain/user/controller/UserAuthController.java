package com.ssafying.domain.user.controller;

import com.ssafying.domain.user.dto.request.CreateUserRequest;
import com.ssafying.domain.user.dto.request.LoginRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.service.UserAuthService;
import com.ssafying.global.config.jwt.TokenProvider;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class UserAuthController {

    private final UserAuthService userAuthService;
    private final TokenProvider tokenProvider;


    private final Duration TOKEN_EXPIRES = Duration.ofDays(7); // 7일

    /*
     * 1.1 회원 가입
     */

    @PostMapping("/signup")
    public int userCreate(@RequestBody @Valid CreateUserRequest request) {

        //회원가입 서비스 호출
        User user = userAuthService.createUser(request);

        return user.getId();

    }

    /*
     * 1.2 로그인
     */
    @PostMapping("/login")
    public int login(@RequestBody @Valid LoginRequest request) {

        //로그인 시도
        User user = userAuthService.login(request.getEmail(), request.getPassword());

        //성공
        if (user != null) {

            //토큰 생성
            String accessToken = tokenProvider.generateToken(user, TOKEN_EXPIRES);

//            System.out.println("////////////////////////////////////");
//            System.out.println(accessToken);
//            System.out.println("////////////////////////////////////");

            return user.getId();

            //실패
        } else {
            return user.getId();
        }
    }

    /*
     * 1.3 로그아웃
     */




}



