package com.ssafying.domain.feed.dto.response;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class GetFeedLikesResponse {

    int userId;
    String nickname;
    String profileImageUrl;

}
