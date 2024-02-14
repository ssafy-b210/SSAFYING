package com.ssafying.domain.bamboo.repository.jdbc;

import com.ssafying.domain.bamboo.dto.response.FindListBambooResponse;
import com.ssafying.domain.bamboo.entity.Bamboo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface BambooRepository extends JpaRepository<Bamboo, Long> {

    @Query("""
            select distinct b
            from Bamboo b
            left join fetch b.commentList
            where b.id = :bambooId
            """)
    Optional<Bamboo> findBambooAndBambooComment(@Param("bambooId") Long bambooId);

    @Query("""
            select b
            from Bamboo b
            where b.createdAt > :threshold
            order by b.createdAt ASC
            """)
    List<Bamboo> findBambooList(@Param("threshold") LocalDateTime threshold);

    /*
    select
            new com.ssafying.domain.bamboo.dto.response.FindListBambooResponse(b.content, b.createdAt, count(*))
            from Bamboo b
            left join b.commentList
            where b.createdAt > :threshold
            group by b.id
            order by b.createdAt ASC

     */

    //게시글당 댓글의 개수
//    @Query("""
//            select
//            new com.ssafying.domain.bamboo.dto.response.FindListBambooResponse(bc.bamboo.id, count(*))
//            from BambooComment bc
//            group by bc.bamboo.id
//            """)
//    SUM(CASE WHEN bc.id  THEN 0 ELSE 1 END)
//    count(bc.id)

    /*
            select
            new com.ssafying.domain.bamboo.dto.response.FindListBambooResponse(
                b.content,
                b.createdAt,
                count(bc.id)
            )
            from Bamboo b
            left join BambooComment bc on b = bc.bamboo
            where b.createdAt > :threshold
            group by b.id
            order by b.createdAt ASC
     */

    @Query("""
            select
            new com.ssafying.domain.bamboo.dto.response.FindListBambooResponse(
                b.id,
                b.user.id,
                b.content,
                b.createdAt,
                count(bc.id)
            )
            from Bamboo b
            left join BambooComment bc on b = bc.bamboo
            where b.createdAt > :threshold
            group by b.id
            order by b.createdAt ASC
            """)
    List<FindListBambooResponse> countBoardAndCommentCount(@Param("threshold") LocalDateTime threshold);
}
