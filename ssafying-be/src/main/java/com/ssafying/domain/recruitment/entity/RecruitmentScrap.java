package com.ssafying.domain.recruitment.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "recruitment_scrap")
@Getter
public class RecruitmentScrap extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recruitment_scrap_id")
    Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // 유저

    @Column(name = "recruitment_id")
    private int recruitmentId;


    public static RecruitmentScrap createRecruitmentScrap(
            User user,
            int recruitmentId
    ) {
        RecruitmentScrap recruitmentScrap = new RecruitmentScrap();
        recruitmentScrap.user = user;
        recruitmentScrap.recruitmentId = recruitmentId;
        return recruitmentScrap;
    }

}
