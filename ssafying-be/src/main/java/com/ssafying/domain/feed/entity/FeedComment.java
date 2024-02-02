package com.ssafying.domain.feed.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.ColumnDefault;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "feed_comment")
@Getter
public class FeedComment extends BaseTimeEntity {

    @Id
    @GeneratedValue
    @Column(name = "feed_comment_id")
    private int id; // 피드 댓글 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feed_id")
    private Feed feed; // 피드 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // 유저 id

    private String content; // 댓글내용

    @ColumnDefault("false")
    private Boolean isDeleted; // 삭제여부

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private FeedComment parentComment; // 부모댓글

    @OneToMany(mappedBy = "parentComment")
    private List<FeedComment> childComments = new ArrayList<>(); // 자식댓글

    public static FeedComment createComment(
            User user,
            String content,
            FeedComment parentComment
    ) {
        FeedComment feedComment = new FeedComment();
        feedComment.user = user;
        feedComment.content = content;
        feedComment.parentComment = parentComment;

        return feedComment;
    }

}
