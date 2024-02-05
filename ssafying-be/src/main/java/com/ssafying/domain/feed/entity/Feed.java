package com.ssafying.domain.feed.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.ColumnDefault;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "feed")
@Getter
public class Feed extends BaseTimeEntity {

    @Id
    @GeneratedValue
    @Column(name = "feed_id")
    private int id; // 피드 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // 유저

    private String content; // 피드 내용

    @ColumnDefault("0")
    private int hit; // 조회수

    @OneToMany(mappedBy = "feed", cascade = CascadeType.ALL)
    private List<FeedHashtag> feedTags = new ArrayList<>();

    @OneToMany(mappedBy = "feed", cascade = CascadeType.ALL)
    private List<FeedImage> feedImages = new ArrayList<>();

    public static Feed createFeed(
            User user,
            String content
    ) {
        Feed feed = new Feed();
        feed.user = user;
        feed.content = content;

        return feed;
    }

    public static Feed modifyFeed(
            Feed feed,
            String content
    ) {
        if(content != null) {
            feed.content = content;
        }
        return feed;
    }


}
