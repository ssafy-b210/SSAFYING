package com.ssafying.domain.bamboo.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

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

    //생성일자와 수정일자는 BaseTimeEntity에 존재


}
