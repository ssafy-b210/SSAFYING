package com.ssafying.domain.feed.repository;

import com.ssafying.domain.feed.entity.FeedComment;
import com.ssafying.domain.feed.entity.FeedCommentLike;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FeedCommentLikeRepository extends JpaRepository<FeedCommentLike, Integer> {

    Optional<FeedCommentLike> findByUserAndFeedComment(User user, FeedComment feedComment);

}
