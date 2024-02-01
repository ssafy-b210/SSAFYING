package com.ssafying.domain.user.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UpdateUserRequest {

    int userId;

    String nickname;

    String phoneNumber;

    String password;

    String intro;

    String profileImageUrl;


}
