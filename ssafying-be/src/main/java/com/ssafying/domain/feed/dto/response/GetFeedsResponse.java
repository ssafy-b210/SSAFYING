package com.ssafying.domain.feed.dto.response;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class GetFeedsResponse {
    private List<String> imageUrls;
    private List<String> feedHashtags;
    private int likeCount;
    private int commentCount;
}
