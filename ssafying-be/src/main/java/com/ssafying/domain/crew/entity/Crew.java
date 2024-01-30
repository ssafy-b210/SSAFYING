package com.ssafying.domain.crew.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.sql.Update;

import java.time.LocalDateTime;

@Entity
@Table(name = "crew")
@Getter
public class Crew extends BaseTimeEntity {

    @Id @GeneratedValue
    @Column(name = "crew_id")
    private int crewId; //크루 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; //회원

    private String title; //제목

    private String content; //내용

    @Enumerated(EnumType.STRING)
    private Region region; //지역

    @Enumerated(EnumType.STRING)
    private Category category; //카테고리

    @Column(name = "is_recruit")
    private boolean isRecruit; //모집 상태

    public static Crew addCrew(
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

        return crew;
    }
}
