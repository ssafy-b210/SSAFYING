package com.ssafying.global.entity;

import com.ssafying.domain.user.entity.InterestTag;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@Table(name = "hashtag")
public class Hashtag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hashtag_id")
    private int id;

    @Column(name = "tag_name")
    private String tagName;

    public static Hashtag createTag(String tagName) {
        Hashtag hashtag = new Hashtag();
        hashtag.tagName = tagName;
        return hashtag;
    }

}
