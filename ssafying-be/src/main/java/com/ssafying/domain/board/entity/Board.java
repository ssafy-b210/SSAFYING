package com.ssafying.domain.board.entity;

import com.ssafying.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Table(name = "board") //자유게시판
@Getter

public class Board {

    @Id @GeneratedValue
    @Column(name="board_id")
    private int id; //자유게시판 게시글 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; //게시물 등록 회원

    @Enumerated(EnumType.STRING)
    private CategoryStatus category; //카테고리

    private String title; //제목

    private String content; //내용

    @Column(name = "is_anonymous")
    private boolean isAnonymous; //익명여부

    @Column(name = "created_at")
    private LocalDateTime createdAt; //생성일자

    @Column(name = "updated_at")
    private LocalDateTime updatedAt; //수정일자
}
