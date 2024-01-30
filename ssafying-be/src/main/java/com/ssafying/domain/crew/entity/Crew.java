package com.ssafying.domain.crew.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.sql.Update;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "crew")
@Getter
public class Crew extends BaseTimeEntity {

    @Id @GeneratedValue
    @Column(name = "crew_id") //updatable = false ?
    private int crewId; //크루 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; //작성자

    private String title; //제목

    private String content; //내용

    @Enumerated(EnumType.STRING)
    private Region region; //지역

    @Enumerated(EnumType.STRING)
    private Category category; //카테고리

    @Column(name = "is_recruit")
    private boolean isRecruit; //모집 상태

    @Column(name = "image_url")
    private String imageUrl; //작성자 프로필 이미지

    /*
    구해요 게시글 생성
     */
    public static Crew createCrew(
            String title,
            String content,
            Region region,
            Category category,
            boolean isRecruit,
            User user
    ) {

        Crew crew = new Crew();

        crew.title = title;
        crew.content = content;
        crew.region = region;
        crew.category = category;
        crew.isRecruit = isRecruit;
        crew.user = user;

        return crew;
    }

    /*
    게시글 수정
     */
    public Crew updateCrew(
            int crewId,
            String title,
            String content,
            boolean isRecruit
    ){

        this.crewId = crewId;
        this.title = title;
        this.content = content;
        this.isRecruit = isRecruit;

        return this;
    }


    /*
    구해요 게시글 전체 조회
     */
//    public List<Crew> findAllCrew(
//            int crewId,
//            User user,
//            String title,
//            boolean isRecruit,
//            String imageUrl
//    ){
//
//        this.crewId = crewId;
//        this.user = user;
//        this.title = title;
//        this.isRecruit = isRecruit;
//        this.imageUrl = imageUrl;
//
//        return
//    }

}
