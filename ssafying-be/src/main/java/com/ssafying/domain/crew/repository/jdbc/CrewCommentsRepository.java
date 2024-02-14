package com.ssafying.domain.crew.repository.jdbc;

import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.crew.entity.CrewComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CrewCommentsRepository extends JpaRepository<CrewComment, Integer> {
    List<CrewComment> findByParentComment(CrewComment parentComment);

    @Query("""
    SELECT c
     FROM CrewComment c
     WHERE c.crew = :crew AND c.parentComment IS NULL
    """)
    List<CrewComment> findParentCommentsByCrew(@Param("crew") Crew crew);
}
