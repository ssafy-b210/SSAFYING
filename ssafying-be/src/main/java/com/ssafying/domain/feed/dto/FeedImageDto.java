package com.ssafying.domain.feed.dto;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class FeedImageDto {

    Long id;
    String imageUrl;

}
