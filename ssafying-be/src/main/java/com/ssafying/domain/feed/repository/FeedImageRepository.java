package com.ssafying.domain.feed.repository;

import com.ssafying.domain.feed.entity.FeedImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedImageRepository extends JpaRepository<FeedImage, Integer> {
}
