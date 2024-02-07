package com.ssafying.domain.feed.dto;

import com.ssafying.domain.feed.entity.FeedHashtag;
import com.ssafying.domain.feed.entity.FeedImage;
import com.ssafying.domain.user.dto.SimpleUserDto;
import com.ssafying.domain.user.entity.User;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FeedDto {

    Long id;

    SimpleUserDto user;

    String content;
    int hit;
    List<FeedHashtagDto> feedTags;
    List<FeedImageDto> feedImages;

    LocalDateTime createdAt;
    LocalDateTime updatedAt;

    long commentCount;
    int likeCount;

    List<ParentCommentDto> parentCommentList;

}
