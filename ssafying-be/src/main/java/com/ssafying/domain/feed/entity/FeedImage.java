package com.ssafying.domain.feed.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "feed_image")
@Getter
public class FeedImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feed_image_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feed_id")
    private Feed feed; // 피드 id

    @Column(name = "image_url")
    private String imageUrl; // 이미지 url

    public static FeedImage createFeedImage(
            Feed feed,
            String imageUrl
    ) {
        FeedImage feedImage = new FeedImage();
        feedImage.feed = feed;
        feedImage.imageUrl = imageUrl;
        return feedImage;
    }

}
