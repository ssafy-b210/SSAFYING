package com.ssafying.domain.feed.entity;

import com.ssafying.global.entity.Hashtag;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "feed_hashtag")
@Getter
public class FeedHashtag {

    @Id
    @GeneratedValue
    @Column(name = "feed_hashtag_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feed_id")
    private Feed feed;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hashtag_id")
    private Hashtag hashtag;

    public static FeedHashtag createFeedtag(
            Feed feed,
            Hashtag hashtag
    ) {
        FeedHashtag feedHashtag = new FeedHashtag();
        feedHashtag.feed = feed;
        feedHashtag.hashtag = hashtag;

        return feedHashtag;
    }

}