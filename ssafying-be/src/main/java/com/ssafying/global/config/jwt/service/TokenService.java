package com.ssafying.global.config.jwt.service;

import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.service.UserService;
import com.ssafying.global.config.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Duration;

@RequiredArgsConstructor
@Service
public class TokenService {

    private final TokenProvider tokenProvider;
    private final RefreshTokenService refreshTokenService;
    private final UserService userService;

    public String createNewAccessToken(String refreshToken) {
        // 토큰 유효성 검사에 실패하면 예외 발생
        if (!tokenProvider.validToken(refreshToken)) {
            throw new IllegalArgumentException("unexpected token");
        }

            int userId = refreshTokenService.findByRefreshToken(refreshToken).getUserId();
            User user = userService.findUser(userId);

            return tokenProvider.generateToken(user, Duration.ofHours(7));
    }
}