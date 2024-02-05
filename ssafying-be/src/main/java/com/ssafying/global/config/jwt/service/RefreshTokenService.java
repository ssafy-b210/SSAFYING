package com.ssafying.global.config.jwt.service;

import com.ssafying.global.config.jwt.entity.RefreshToken;
import com.ssafying.global.config.jwt.repository.RefreshTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class RefreshTokenService {
    private final RefreshTokenRepository refreshTokenRepository;

    public void saveRefreshToken(int userId, String refreshToken) {
        RefreshToken token = refreshTokenRepository.findByUserId(userId)
                .orElse(new RefreshToken(userId, refreshToken));

        token.update(refreshToken);
        refreshTokenRepository.save(token);
    }

    public RefreshToken findByRefreshToken(String refreshToken) {
        return refreshTokenRepository.findByRefreshToken(refreshToken)
                .orElseThrow(() -> new IllegalArgumentException("토큰 정보가 없습니다."));
    }

    public RefreshToken deleteRefreshToken(int userId){
        return refreshTokenRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("토큰 정보가 없습니다."));
    }

}