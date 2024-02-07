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
    @Column(name = "is_deleted", columnDefinition = "TINYINT(1)")
    private boolean isDeleted; // 삭제여부

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private FeedComment parentComment; // 부모댓글

    // 자식댓글이 남아있어도 부모댓글이 삭제될 수 있게 외래키 제약조건 없이 일대다 관계 매핑
    @OneToMany
    @JoinColumn(name = "parent_id")
    private List<FeedComment> childComments = new ArrayList<>(); // 자식댓글

    @OneToMany(mappedBy = "feedComment", cascade = CascadeType.ALL)
    private List<FeedCommentLike> commentLikes = new ArrayList<>();



    public static FeedComment createComment(
            User user,
            Feed feed,
            String content,
            FeedComment parentComment
    ) {
        FeedComment feedComment = new FeedComment();
        feedComment.user = user;
        feedComment.feed = feed;
        feedComment.content = content;
        feedComment.parentComment = parentComment;

        return feedComment;
    }

    public void markAsDeleted() {
        this.isDeleted = true;
    }

}
