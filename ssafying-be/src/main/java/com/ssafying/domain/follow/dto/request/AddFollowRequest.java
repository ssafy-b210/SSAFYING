package com.ssafying.domain.follow.dto.request;

import com.ssafying.domain.user.entity.User;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddFollowRequest {

    int fromUserId; //팔로우 거는 follower

    int toUserId; //팔로우 받는 followee
}
