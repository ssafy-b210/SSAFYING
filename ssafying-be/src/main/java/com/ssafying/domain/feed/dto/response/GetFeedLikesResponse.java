package com.ssafying.domain.feed.dto.response;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class GetFeedLikesResponse {

    int userId;
    String nickname;
    String profileImageUrl;

}
