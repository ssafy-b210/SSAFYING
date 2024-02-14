package com.ssafying.global.dto;

import com.ssafying.domain.crew.entity.CrewComment;
import com.ssafying.domain.feed.entity.FeedComment;
import com.ssafying.domain.user.dto.SimpleUserDto;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ChildCommentDto {

    int id;

    // 댓글 작성 유저정보
    SimpleUserDto user;

    // 댓글 내용
    String content;

    // 부모댓글 삭제여부
    boolean isDeleted;

    LocalDateTime createdAt;
    LocalDateTime updatedAt;


    public static ChildCommentDto convertToFeedChildCommentDto(FeedComment childComment) {
        return ChildCommentDto.builder()
                .id(childComment.getId())
                .user(SimpleUserDto.convertToSimpleUserDto(childComment.getUser()))
                .content(childComment.getContent())
                .isDeleted(childComment.isDeleted())
                .createdAt(childComment.getCreatedAt())
                .updatedAt(childComment.getUpdatedAt())
                .build();
    }

    public static ChildCommentDto convertToCrewChildCommentDto(CrewComment childComment) {
        return ChildCommentDto.builder()
                .id(childComment.getId())
                .user(SimpleUserDto.convertToSimpleUserDto(childComment.getUser()))
                .content(childComment.getContent())
                .isDeleted(childComment.isDeleted())
                .createdAt(childComment.getCreatedAt())
                .updatedAt(childComment.getUpdatedAt())
                .build();
    }

}
