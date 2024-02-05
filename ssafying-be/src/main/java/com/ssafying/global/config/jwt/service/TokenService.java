package com.ssafying.global.config.jwt.service;

import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.service.UserService;
import com.ssafying.global.config.jwt.TokenProvider;
import com.ssafying.global.config.jwt.entity.RefreshToken;
import com.ssafying.global.config.jwt.repository.RefreshTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.Date;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class TokenService {

    private final TokenProvider tokenProvider;
    private final RefreshTokenService refreshTokenService;
    private final UserService userService;

    public Map<String, String> createNewAccessToken(String refreshToken) {
        // 토큰 유효성 검사에 실패하면 예외 발생
        if (!tokenProvider.validToken(refreshToken)) {
            throw new IllegalArgumentException("unexpected token");
        }

            int userId = refreshTokenService.findByRefreshToken(refreshToken).getUserId();
            User user = userService.findUser(userId);

            return tokenProvider.generateToken(user, Duration.ofDays(7));
    }
}