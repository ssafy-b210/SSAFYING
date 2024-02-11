package com.ssafying.domain.crew.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafying.domain.crew.dto.request.AddCrewRequest;
import com.ssafying.domain.crew.dto.request.ModifyCrewRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "crew")
@Getter
public class Crew extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "crew_id")
    private int crewId; //크루 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "user_id")
    private User user; //작성자

    private String title; //제목

    private String content; //내용

    @Enumerated(EnumType.STRING)
    private Region region; //지역

    @Enumerated(EnumType.STRING)
    private Category category; //카테고리

    @Column(name = "is_recruit")
    private Boolean isRecruit; //모집 상태 - true : 모집 완 / false : 모집 중

    @Column(name = "profile_image_url")
    private String profileImageUrl; //작성자 프로필 이미지

    @OneToMany(mappedBy = "crew", cascade = CascadeType.REMOVE)
    private List<CrewComment> comments = new ArrayList<>(); //댓글

    /*
     * 구해요 게시글 작성
     */
    public static Crew createCrew(
            AddCrewRequest request,
            User user
    ) {

        Crew crew = new Crew();

        crew.title = request.getTitle();
        crew.content = request.getContent();
        crew.region = request.getRegion();
        crew.category = request.getCategory();
        crew.isRecruit = request.getIsRecruit();
        crew.user = user;

        return crew;
    }

    /*
     * 게시글 수정
     */
    public static Crew modifyCrew(
            Crew crew,
            ModifyCrewRequest request
    ){

        // null 값이 아닌 경우에만 업데이트
        if(request.getTitle() != null){
            crew.title = request.getTitle();
        }
        if(request.getContent() != null){
            crew.content = request.getContent();
        }

        //드롭 다운
        crew.region = request.getRegion();
        crew.category = request.getCategory();
        crew.isRecruit = request.getIsRecruit();

        return crew;
    }

}
