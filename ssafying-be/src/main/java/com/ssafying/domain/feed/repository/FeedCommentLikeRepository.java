package com.ssafying.domain.feed.repository;

import com.ssafying.domain.feed.entity.FeedCommentLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedCommentLikeRepository extends JpaRepository<FeedCommentLike, Integer> {
}
