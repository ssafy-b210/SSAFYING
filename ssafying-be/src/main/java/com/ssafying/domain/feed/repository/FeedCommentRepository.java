package com.ssafying.domain.feed.repository;

import com.ssafying.domain.feed.entity.FeedComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedCommentRepository extends JpaRepository<FeedComment, Integer> {
}
