package com.ssafying.domain.feed.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class FeedHashtag {

    @Id
    @GeneratedValue
    @Column(name = "feed_hashtag_id")
    private int id;

    

}
