package com.ssafying.domain.feed.entity;

import com.ssafying.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "feed_comment_like")
@Getter
public class FeedCommentLike {

    @Id
    @GeneratedValue
    @Column(name = "feed_comment_like_id")
    private int id; // 피드댓글 좋아요 알림 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // 유저 id

}
