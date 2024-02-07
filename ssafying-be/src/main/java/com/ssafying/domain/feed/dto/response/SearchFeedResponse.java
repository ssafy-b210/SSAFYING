package com.ssafying.domain.feed.dto.response;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class SearchFeedResponse {

    Long id;
    int userId;

    String content;
    int hit;

    List<String> feedTags;

    List<String> feedImages;

    LocalDateTime createdAt;
    LocalDateTime updatedAt;

//    int commentCount;
//    int likeCount;


}