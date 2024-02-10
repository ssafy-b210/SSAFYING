package com.ssafying.domain.user.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class UserDetailResponse{

    String name;
    String nickname;
    String email;
    String phoneNumber;
    String intro;

}
