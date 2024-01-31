package com.ssafying.domain.feed.repository;

import com.ssafying.domain.feed.entity.FeedScrap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedScrapRepository extends JpaRepository<FeedScrap, Integer> {
}
