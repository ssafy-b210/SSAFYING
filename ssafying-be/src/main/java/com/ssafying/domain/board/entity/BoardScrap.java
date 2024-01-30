package com.ssafying.domain.board.entity;

import com.ssafying.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "board_scrap") //자유게시판 스크랩
@Getter
public class BoardScrap {

    @Id
    @GeneratedValue
    @Column(name = "board_scrap_id")
    private int id; //자유게시판 게시글 스크랩 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; //게시글 스크랩 회원

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board; //스크랩한 게시글
}
