package com.ssafying.domain.board.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "board") //자유게시판
@Getter
public class Board extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="board_id")
    private int id; //자유게시판 게시글 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; //게시물 등록 회원

    private String title; //제목

    private String content; //내용

    @Enumerated(EnumType.STRING)
    private CategoryStatus category; //카테고리

    @Column(name = "is_anonymous")
    private boolean isAnonymous; //익명여부

    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE) //게시글 사라지면 댓글도 삭제됨
    private List<BoardComment> commentList = new ArrayList<>(); //댓글

    //이게 필요한 상황은 이 board에 대해서 모든 user를 조회해올 때임 -> 그럴 필요없으니 주석처맄
    //근데 cascade를 넣어야 하기 때문에 넣어줌
    //Scrap 쪽에서 ondelete 를 사용해서 넣어줘도 되지만 이 방식으로 하겠음
    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE) //게시글 삭제되면 스크랩 여부도 삭제됨
    private List<BoardScrap> isScrap = new ArrayList<>(); // 스크랩 여부

    //생성일자와 수정일자는 BaseTimeEntity 에 있음


    //그냥 생성자를 사용하면 어떤 경우에 사용되는지 알 수 없음.
    //이렇게 특정한 경우 사용되는 함수를 정의해주면 더 명확하게 의도를 알 수 있음.
    public static Board createBoard(
        String title,
        String content,
        CategoryStatus category,
        boolean isAnonymous,
        User user
    ){
        Board board = new Board();

        //파라미터로 넘어온 값 세팅
        board.title = title;
        board.content = content;
//        board.category = CategoryStatus.valueOf(category);
        board.category = category;
        board.isAnonymous = isAnonymous;
        board.user = user;

        return board;
    }

    public void modifyBoard(
            String title,
            String content,
            CategoryStatus category,
            boolean isAnonymous
    ) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.isAnonymous = isAnonymous;
    }
}