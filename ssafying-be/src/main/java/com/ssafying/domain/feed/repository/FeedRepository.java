package com.ssafying.domain.feed.repository;


import com.ssafying.domain.feed.dto.FeedDto;
import com.ssafying.domain.feed.entity.Feed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface FeedRepository extends JpaRepository<Feed, Integer>, JpaSpecificationExecutor<Feed> {

//    @Query("SELECT new com.ssafying.domain.feed.dto.FeedDto(f.id, f.user, f.content, f.hit, f.feedTags, f.feedImages, f.createdAt, f.updatedAt) " +
//            "FROM Feed f " +
//            "WHERE f.user.id = :userId " +
//            "AND f.createdAt >= :sevenDaysAgo")
//    List<FeedDto> findFeedsByUserIdAndDate(@Param("userId") int userId, @Param("sevenDaysAgo") LocalDateTime sevenDaysAgo);

}
