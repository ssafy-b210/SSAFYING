package com.ssafying.domain.feed.repository;

import com.ssafying.global.entity.Hashtag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HashtagRepository extends JpaRepository<Hashtag, Integer> {
    Optional<Hashtag> findByTagName(String tagName);
}
