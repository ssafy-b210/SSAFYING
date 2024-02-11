package com.ssafying.domain.feed.dto.response;

import com.ssafying.domain.user.dto.SimpleUserDto;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class GetFeedResponse {

    Long id;

    SimpleUserDto user;

    String content;
    int hit;

    List<String> feedTags;

    List<String> feedImages;

    LocalDateTime createdAt;
    LocalDateTime updatedAt;

    long commentCount;
    long likeCount;


}