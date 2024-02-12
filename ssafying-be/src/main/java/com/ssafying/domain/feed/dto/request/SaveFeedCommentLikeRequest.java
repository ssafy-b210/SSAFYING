package com.ssafying.domain.feed.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class SaveFeedCommentLikeRequest {

    int userId;
    int commentId;
}
