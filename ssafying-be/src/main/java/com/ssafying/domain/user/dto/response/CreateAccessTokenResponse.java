package com.ssafying.domain.user.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class CreateAccessTokenResponse {
    private String accessToken;
}