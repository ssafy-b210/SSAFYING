package com.ssafying.domain.feed.repository;

import com.ssafying.domain.feed.entity.FeedLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedLikeRepository extends JpaRepository<FeedLike, Integer> {
}
