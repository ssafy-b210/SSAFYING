package com.ssafying.domain.feed.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SaveFeedCommentLikeRequest {

    int userId;
    int commentId;
}
