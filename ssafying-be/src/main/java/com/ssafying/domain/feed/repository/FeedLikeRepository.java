package com.ssafying.domain.feed.repository;

import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.feed.entity.FeedLike;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FeedLikeRepository extends JpaRepository<FeedLike, Integer> {

    Optional<FeedLike> findByUserAndFeed(User user, Feed feed);

    List<FeedLike> findByFeed(Feed feed);

}
