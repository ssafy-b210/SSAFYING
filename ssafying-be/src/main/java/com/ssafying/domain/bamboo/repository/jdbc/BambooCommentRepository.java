package com.ssafying.domain.bamboo.repository.jdbc;

import com.ssafying.domain.bamboo.entity.BambooComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BambooCommentRepository extends JpaRepository<BambooComment, Long> {
}
