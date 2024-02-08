package com.ssafying.domain.follow.repository.jdbc;

import com.ssafying.domain.follow.entity.Follow;
import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Integer> {

    List<Follow> findByFromUser(User from_user);

    List<Follow> findByToUser(User to_user);

    //팔로잉 목록에서 유저 검색
    @Query("select f from Follow f where f.fromUser = :toUser and f.toUser.nickname like :nickname")
    List<Follow> findByToUserAndNickname(@Param("toUser") User toUser, @Param("nickname") String nickname);

    //팔로워 목록에서 유저 검색
    @Query("select f from Follow f where f.toUser = :fromUser and f.fromUser.nickname like :nickname")
    List<Follow> findByFromUserAndNickname(@Param("fromUser") User fromUser, @Param("nickname") String nickname);

    @Modifying
    @Query("delete from Follow f where f.fromUser = :from and f.toUser = :to")
    void deleteFollowByFromUser(@Param("from") User from_user, @Param("to") User to_user);

    @Query("select f from Follow f where f.fromUser = :from and f.toUser = :to")
    Optional<Follow> findFollow(@Param("from") User from_user, @Param("to") User to_user);

    //추천친구
    @Query("SELECT u FROM User u "
            + "INNER JOIN Follow f ON f.toUser.id = u.id "
            + "WHERE f.fromUser.id = :userId "
            + "AND u.campus = :campus "
            + "AND u.generation = :generation "
            + "AND u.isMajor = :isMajor "
            + "ORDER BY f.createdAt DESC "
            + "LIMIT 5")
    List<User> findRecommendedFriends(@Param("userId") int userId,
                                      @Param("campus") Campus campus,
                                      @Param("generation") int generation,
                                      @Param("isMajor") boolean isMajor);
}

