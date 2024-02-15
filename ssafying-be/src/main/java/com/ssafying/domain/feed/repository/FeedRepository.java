package com.ssafying.domain.feed.repository;


import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface FeedRepository extends JpaRepository<Feed, Integer>, JpaSpecificationExecutor<Feed> {

    List<Feed> findByUser(User user);

    @Query("""
        SELECT f
        FROM Feed f
        join fetch f.feedScraps fs
        where fs.user.id = :userId
        order by fs.feed.createdAt desc
       """)
    List<Feed> findScrapFeedList(@Param("userId") int userId);

//    @Query("""
//    SELECT new com.ssafying.domain.feed.dto.FeedDto(f.id, f.content, f.hit, f.feedTags, f.feedImages, f.createdAt, f.updatedAt)
//    FROM Feed f
//    WHERE f.user.id = :userId
//    AND f.createdAt >= :sevenDaysAgo
//    """)
    @Query("""
    SELECT f
    FROM Feed f
    WHERE f.user.id = :userId
    AND f.createdAt >= :sevenDaysAgo
    """)
    List<Feed> findFeedsByUserIdAndDate(@Param("userId") int userId, @Param("sevenDaysAgo") LocalDateTime sevenDaysAgo);


    @Query("""
    SELECT DISTINCT f
    FROM Feed f
    JOIN f.feedTags ft
    WHERE ft.hashtag.id IN (:tagIds) AND f.user.id != :userId
    """)
    List<Feed> findInterestFeedList(@Param("tagIds") List<Integer> tagIds, @Param("userId") int userId);

    //팔로워 많은순으로 - 이미 팔로잉유저가 작성한 피드를 제공해줬기때문에 이 쿼리에선 제거
    @Query("""
        SELECT f
        FROM Feed f
        WHERE f.user.id NOT IN :userIds
        ORDER BY SIZE(f.user.followers) DESC
    """)
    List<Feed> findFeedsExcludeFollowingOrderByFollowersDesc(
            @Param("userIds") List<Integer> userIds
    );
}
