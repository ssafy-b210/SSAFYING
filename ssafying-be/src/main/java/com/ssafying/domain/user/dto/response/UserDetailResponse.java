package com.ssafying.domain.user.dto.response;

import com.ssafying.domain.user.entity.InterestTag;
import lombok.*;

import java.util.List;

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
    String profileImageUrl;
    String bioLink;

}
