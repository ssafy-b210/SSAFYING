package com.ssafying.domain.feed.dto.response;

import com.ssafying.domain.feed.dto.FeedHashtagDto;
import com.ssafying.domain.feed.dto.FeedImageDto;
import com.ssafying.domain.feed.dto.ParentCommentDto;
import com.ssafying.domain.user.dto.SimpleUserDto;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class DetailFeedResponse {

    Long id;

    SimpleUserDto user;

    String content;
    int hit;
    List<FeedHashtagDto> feedTags;
    List<FeedImageDto> feedImages;

    LocalDateTime createdAt;
    LocalDateTime updatedAt;

    int commentCount;
    int likeCount;

    List<ParentCommentDto> parentCommentList;

}
