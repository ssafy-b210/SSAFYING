package com.ssafying.domain.feed.dto;

import com.ssafying.domain.feed.entity.FeedComment;
import com.ssafying.domain.user.dto.SimpleUserDto;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ParentCommentDto {

    int id;

    // 댓글 작성 유저정보
    SimpleUserDto user;
    
    // 댓글 내용
    String content;

    // 댓글 좋아요 개수
//    int likeCounts;

    // 자식댓글
    List<ChildCommentDto> childComments;

    LocalDateTime createdAt;
    LocalDateTime updatedAt;

    public static ParentCommentDto convertToParentCommentDto(FeedComment parentComment) {
        return ParentCommentDto.builder()
                    .id(parentComment.getId())
                    .user(SimpleUserDto.convertToSimpleUserDto(parentComment.getUser()))
                    .content(parentComment.getContent())
//                        .likeCounts(parentComment.getCommentLikes().size())
                    .childComments(parentComment.getChildComments()
                            .stream()
                            .map(ChildCommentDto::convertToChildCommentDto)
                            .collect(Collectors.toList()))
                    .build();
    }

}
