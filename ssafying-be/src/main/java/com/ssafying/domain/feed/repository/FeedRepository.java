package com.ssafying.domain.feed.repository;


import com.ssafying.domain.feed.entity.Feed;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedRepository extends JpaRepository<Feed, Integer> {
}
