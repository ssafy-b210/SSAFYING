package com.ssafying.domain.user.dto;

import com.ssafying.domain.user.dto.response.LoginResponse;
import lombok.*;
import org.springframework.http.HttpHeaders;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class LoginHeaderDto {

    LoginResponse response;
    HttpHeaders responseHeaders;

}
