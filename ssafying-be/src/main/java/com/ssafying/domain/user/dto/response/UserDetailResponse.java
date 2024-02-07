package com.ssafying.domain.user.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class UserDetailResponse{

    private String name;
    private String nickname;
    private String email;
    private String phoneNumber;
    private String intro;

}
