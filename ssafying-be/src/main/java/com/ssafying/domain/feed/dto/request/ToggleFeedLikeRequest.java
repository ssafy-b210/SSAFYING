package com.ssafying.domain.feed.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ToggleFeedLikeRequest {
    int user_id;
    int feed_id;
}
