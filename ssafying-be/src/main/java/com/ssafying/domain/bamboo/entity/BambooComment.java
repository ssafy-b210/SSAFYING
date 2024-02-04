package com.ssafying.domain.bamboo.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "bamboo_comment") //대나무숲
@Getter
public class BambooComment extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bamboo_comment_id")
    private Long id; //대나무숲 댓글 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bamboo_id")
    private Bamboo bamboo; //댓글 단 대나무숲 글

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "uesr_id")
    private User user; //댓글 단 회원

    private String content; //댓글 내용


    //생성일자와 수정일자는 BaseTimeEntity에 있음


    public static BambooComment createBambooComment(
            Bamboo bamboo,
            User user,
            String content
    ) {
        BambooComment comment = new BambooComment();

        comment.bamboo = bamboo;
        comment.user = user;
        comment.content = content;

        return comment;
    }

}
