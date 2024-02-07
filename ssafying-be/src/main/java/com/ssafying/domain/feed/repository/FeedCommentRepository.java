package com.ssafying.domain.feed.repository;

import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.feed.entity.FeedComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FeedCommentRepository extends JpaRepository<FeedComment, Integer> {

    List<FeedComment> findByFeed(Feed feed);

}
