package com.ssafying.domain.feed.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "feed_like")
@Getter
public class FeedLike extends BaseTimeEntity {

    @Id
    @GeneratedValue
    @Column(name = "feed_like_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feed_id")
    private Feed feed; // 피드 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // 유저 id

    public static FeedLike createFeedLike(
        Feed feed,
        User user
    ) {
        FeedLike feedLike = new FeedLike();
        feedLike.feed = feed;
        feedLike.user = user;
        return feedLike;
    }

}
