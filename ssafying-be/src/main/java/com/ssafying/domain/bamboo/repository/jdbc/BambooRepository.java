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

    @Query("""
            select
            new com.ssafying.domain.bamboo.dto.response.FindListBambooResponse(b.content, b.createdAt, count(*))
            from Bamboo b
            left join b.commentList
            group by b.id
            """)
    List<FindListBambooResponse> countComment();
}
