package com.ssafying.domain.bamboo.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "bamboo") //대나무숲
@Getter
public class Bamboo extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bamboo_id")
    private Long id; //대나무숲 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; //대나무숲 등록 회원

    private String content; //대나무숲 글 내용

    @OneToMany(mappedBy = "bamboo", cascade = CascadeType.REMOVE) //글이 사라지면 댓글도 사라짐
    private List<BambooComment> commentList = new ArrayList<>(); //댓글


    //생성일자와 수정일자는 BaseTimeEntity에 존재

    public void addComment(BambooComment comment) {
        commentList.add(comment);
        comment.setBamboo(this);
    }

    public static Bamboo createBamboo(
            User user,
            String content
    ) {
        Bamboo bamboo = new Bamboo();

        bamboo.user = user;
        bamboo.content = content;

        return bamboo;
    }

    public void printComment() {
        for (BambooComment comment : commentList) {
            System.out.println("comment.toString() = " + comment.toString());
        }
    }

}
