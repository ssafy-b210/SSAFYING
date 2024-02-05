package com.ssafying.domain.feed.repository;

import com.ssafying.domain.feed.entity.FeedHashtag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FeedHashtagRepository extends JpaRepository<FeedHashtag, Integer> {

}
