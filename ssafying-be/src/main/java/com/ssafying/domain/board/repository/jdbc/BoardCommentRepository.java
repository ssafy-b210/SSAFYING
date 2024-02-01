package com.ssafying.domain.board.repository.jdbc;

import com.ssafying.domain.board.entity.BoardComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardCommentRepository extends JpaRepository<BoardComment, Integer> {
}
