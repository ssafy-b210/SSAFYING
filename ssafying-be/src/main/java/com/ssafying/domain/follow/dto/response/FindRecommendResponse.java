package com.ssafying.domain.follow.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class FindRecommendResponse {

    String nickname;
    String profileImageUrl;
}
