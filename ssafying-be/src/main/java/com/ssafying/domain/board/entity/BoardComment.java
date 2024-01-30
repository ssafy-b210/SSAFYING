package com.ssafying.domain.board.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Table(name = "board_comment")
@Getter
public class BoardComment {

    @Id
    @GeneratedValue
    @Column(name = "board_comment_id")
    private int id; //자유게시판-댓글 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board; //댓글 작성한 게시글

    private String content; //댓글 내용

    @Column(name = "is_deleted")
    private boolean isDeleted; //삭제 여부

    @Column(name = "parent_id")
    private int parentId; //부모댓글

    @Column(name = "created_id")
    private LocalDateTime createdAt; //생성일자
}
