package com.ssafying.domain.board.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "board_comment")
@Getter
public class BoardComment extends BaseTimeEntity {

    @Id
    @GeneratedValue
    @Column(name = "board_comment_id")
    private int id; //자유게시판-댓글 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board; //댓글 작성한 게시글

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; //댓글 등록한 유저

    private String content; //댓글 내용

    @Column(name = "is_anonymous")
    private boolean isAnonymous; //익명 여부

    @Column(name = "is_deleted")
    private boolean isDeleted; //삭제 여부

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_comment_id") //사실 외래키를 사실
    private BoardComment parentComment; //부모댓글

    //생성일자와 수정일자는 BaseTimeEntity에 있음


    //팩토리 함수
    public static BoardComment createBoardComment(
            Board board,
            User user,
            String content,
            boolean isAnonymous,
            boolean isDeleted,
            BoardComment parentComment
    ) {
        BoardComment comment = new BoardComment();

        comment.board = board;
        comment.user = user;
        comment.content = content;
        comment.isAnonymous = isAnonymous;
        comment.isDeleted = isDeleted;
        comment.parentComment = parentComment;

        return comment;
    }

    //댓글 수정 함수
    public void modifyBoard(
            String content
    ) {
        this.content = content;
    }

    public void setBoard(Board board) {
        this.board = board;
    }
}
