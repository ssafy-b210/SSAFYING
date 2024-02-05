package com.ssafying.domain.user.controller;

import com.ssafying.domain.user.dto.request.CreateUserRequest;
import com.ssafying.domain.user.dto.request.LoginRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.service.UserAuthService;
import com.ssafying.global.config.jwt.TokenProvider;
import com.ssafying.domain.user.dto.request.CreateAccessTokenRequest;
import com.ssafying.domain.user.dto.response.CreateAccessTokenResponse;
import com.ssafying.global.config.jwt.service.TokenService;
import com.ssafying.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@Tag(name = "회원가입, 로그인")
public class UserAuthController {

    private final UserAuthService userAuthService;
    private final TokenProvider tokenProvider;
    private final TokenService tokenService;


    private final Duration TOKEN_EXPIRES = Duration.ofDays(7); // 7일

    /*
     * 1.1 회원 가입
     */

    @PostMapping("/signup")
    @Operation(summary = "회원 가입")
    public ResponseEntity<ResultResponse<Integer>> userAdd(@RequestBody @Valid CreateUserRequest request) {

        //회원가입 서비스 호출
        int result = userAuthService.addUser(request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));

    }

    /*
     * 1.2 로그인
     */
    @PostMapping("/login")
    @Operation(summary = "로그인")
    public ResponseEntity<String> login(@RequestBody @Valid LoginRequest request) {

        //로그인 시도
        User user = userAuthService.login(request.getEmail(), request.getPassword());

        //성공
        if (user != null) {

            //토큰 생성
            String token = tokenProvider.generateToken(user, TOKEN_EXPIRES);

            // 헤더에 담아서 응답
            HttpHeaders responseHeaders = new HttpHeaders();
            responseHeaders.setBearerAuth(token);
            return ResponseEntity.ok().headers(responseHeaders).body(token);

            //실패
        } else {
            throw new RuntimeException("로그인 실패");
        }
    }
    /*
     * 토큰 재발급
     */
    @PostMapping("/newToken")
    @Operation(summary = "토큰 재발급")
    public ResponseEntity<CreateAccessTokenResponse> createNewAccessToken(@RequestBody @Valid CreateAccessTokenRequest request) {

        // Refresh 토큰 유효성 검사
        try {
            tokenProvider.validToken(request.getRefreshToken());
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("유효하지 않은 토큰입니다.");
        }

        // 새로운 Access 토큰 생성
        String newAccessToken = tokenService.createNewAccessToken(request.getRefreshToken());

        // 헤더에 담아서 응답
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setBearerAuth(newAccessToken);
        return ResponseEntity.ok().headers(responseHeaders).body(new CreateAccessTokenResponse(newAccessToken));
    }

    /*
     * 1.3 로그아웃
     */




}



