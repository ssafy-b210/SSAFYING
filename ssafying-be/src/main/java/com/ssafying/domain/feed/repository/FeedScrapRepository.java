package com.ssafying.domain.feed.repository;

import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.feed.entity.FeedScrap;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FeedScrapRepository extends JpaRepository<FeedScrap, Integer> {

    Optional<FeedScrap> findByFeedAndUser(Feed feed, User user);

}
