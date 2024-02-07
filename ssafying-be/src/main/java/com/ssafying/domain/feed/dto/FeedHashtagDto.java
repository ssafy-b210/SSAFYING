package com.ssafying.domain.feed.dto;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class FeedHashtagDto {

    Long id;
    String tagName;

}
