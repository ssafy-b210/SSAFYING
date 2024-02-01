package com.ssafying.global.config.jwt.repository;


import com.ssafying.global.config.jwt.entity.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Integer> {
    Optional<RefreshToken> findByUserId(int userId);
    Optional<RefreshToken> findByRefreshToken(String refreshToken);
}