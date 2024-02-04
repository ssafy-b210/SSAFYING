package com.ssafying.domain.crew.repository.jdbc;

import com.ssafying.domain.crew.entity.CrewComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CrewCommentsRepository extends JpaRepository<CrewComment, Integer> {
    List<CrewComment> findByParentComment(CrewComment parentComment);
}
