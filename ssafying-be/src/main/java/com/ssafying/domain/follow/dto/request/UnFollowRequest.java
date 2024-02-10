package com.ssafying.domain.follow.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class UnFollowRequest {

    int fromUserId; //팔로우 취소하려는 user

    int toUserId; //언팔로우 대상 user
}
