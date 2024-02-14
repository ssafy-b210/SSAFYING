package com.ssafying.global.dto;

import com.ssafying.domain.crew.entity.CrewComment;
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

    // 자식댓글
    List<ChildCommentDto> childComments;

    LocalDateTime createdAt;
    LocalDateTime updatedAt;

    public static ParentCommentDto convertToFeedParentCommentDto(FeedComment comment) {
        return ParentCommentDto.builder()
                .id(comment.getId())
                .user(SimpleUserDto.convertToSimpleUserDto(comment.getUser()))
                .content(comment.getContent())
                .childComments(comment.getChildComments()
                        .stream()
                        .map(ChildCommentDto::convertToFeedChildCommentDto)
                        .collect(Collectors.toList()))
                .createdAt(comment.getCreatedAt())
                .updatedAt(comment.getUpdatedAt())
                .build();
    }

    public static ParentCommentDto convertToCrewParentCommentDto(CrewComment comment) {
        return ParentCommentDto.builder()
                .id(comment.getId())
                .user(SimpleUserDto.convertToSimpleUserDto(comment.getUser()))
                .content(comment.getContent())
                .childComments(comment.getChildComments()
                        .stream()
                        .map(ChildCommentDto::convertToCrewChildCommentDto)
                        .collect(Collectors.toList()))
                .createdAt(comment.getCreatedAt())
                .updatedAt(comment.getUpdatedAt())
                .build();
    }


}
