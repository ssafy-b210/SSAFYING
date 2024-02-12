package com.ssafying.domain.user.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserInfoDto {

    private String email;
    private String nickname;
    private String phoneNumber;
    private String name;
    private int generation;
    private String profileImageUrl;
    private String intro;
    private int isMajor;

}
