package com.ssafying.domain.feed.dto;

import com.ssafying.domain.feed.entity.FeedComment;
import com.ssafying.domain.user.dto.SimpleUserDto;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ParentCommentDto {

    // 댓글 작성 유저정보
    SimpleUserDto user;
    
    // 댓글 내용
    String content;

    // 댓글 좋아요 개수
    int likeCounts;

    // 자식댓글
    List<ChildCommentDto> childComments;
}
