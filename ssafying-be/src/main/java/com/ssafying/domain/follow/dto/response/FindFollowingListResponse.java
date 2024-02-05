package com.ssafying.domain.follow.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class FindFollowingListResponse {

    private int id; // 팔로잉 유저 ID
    private String nickname; // 팔로잉 유저 닉네임
    private String profileImageUrl; // 팔로잉 유저 프로필 이미지 URL

}
