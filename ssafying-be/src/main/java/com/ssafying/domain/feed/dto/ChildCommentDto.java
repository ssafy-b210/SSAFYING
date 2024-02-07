package com.ssafying.domain.feed.dto;

import com.ssafying.domain.user.dto.SimpleUserDto;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ChildCommentDto {

    // 댓글 작성 유저정보
    SimpleUserDto user;

    // 댓글 내용
    String content;

    // 부모댓글 삭제여부
    boolean isDeleted;

    // 댓글 좋아요 개수
    int likeCounts;

}
