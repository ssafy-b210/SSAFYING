package com.ssafying.domain.user.dto.request;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LogoutRequest {

    int userId;

    String token;

}
