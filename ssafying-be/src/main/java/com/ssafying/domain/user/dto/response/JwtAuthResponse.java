package com.ssafying.domain.user.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtAuthResponse {

    private String accessToken;

    public JwtAuthResponse(String accessToken){
        this.accessToken = accessToken;
    }

}
