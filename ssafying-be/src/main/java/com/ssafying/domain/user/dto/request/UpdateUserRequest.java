package com.ssafying.domain.user.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class UpdateUserRequest {

    String nickname;

    String phoneNumber;

    String password;

    String intro;

    String profileImageUrl;


}
