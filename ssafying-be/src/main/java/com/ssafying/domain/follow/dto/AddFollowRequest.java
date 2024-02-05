package com.ssafying.domain.follow.dto;

import com.ssafying.domain.user.entity.User;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddFollowRequest {

    private int fromUserId; //팔로우 거는 follower

    private int toUserId; //팔로우 받는 followee
}
