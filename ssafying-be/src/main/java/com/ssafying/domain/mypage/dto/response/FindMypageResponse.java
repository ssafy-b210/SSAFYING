package com.ssafying.domain.mypage.dto.response;

import com.ssafying.domain.user.dto.UserInfoDto;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class FindMypageResponse {

    UserInfoDto userInfo;

    int feedCount;
    int followingCount;
    int followerCount;

}
