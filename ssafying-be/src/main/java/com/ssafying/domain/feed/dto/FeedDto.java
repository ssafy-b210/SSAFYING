package com.ssafying.domain.feed.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafying.domain.feed.entity.FeedHashtag;
import com.ssafying.domain.feed.entity.FeedImage;
import com.ssafying.domain.user.entity.User;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
public class FeedDto {

    Long id;
    int userId; // User 엔티티는 프록시이므로 직렬화에서 무시

    String content;
    int hit;

    List<String> feedTags;

    List<String> feedImages;

    LocalDateTime createdAt;
    LocalDateTime updatedAt;

//    int commentCount;
//    int likeCount;


}