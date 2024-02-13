package com.ssafying.domain.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafying.global.entity.Hashtag;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "interest_tag")
@Getter
public class InterestTag {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "interest_tag_id")
    private int interestTagId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "hashtag_id")
    private Hashtag tag;


    /*
     * interestTag 추가
     */
    public static InterestTag addInterestTag(
            User user,
            Hashtag tag
    ){
        InterestTag interestTag = new InterestTag();

        interestTag.user = user;
        interestTag.tag = tag;

        return interestTag;
    }

}
