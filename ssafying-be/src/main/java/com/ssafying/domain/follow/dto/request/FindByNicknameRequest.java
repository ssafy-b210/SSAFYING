package com.ssafying.domain.follow.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class FindByNicknameRequest {

    int userId;
    String nickname;

}
