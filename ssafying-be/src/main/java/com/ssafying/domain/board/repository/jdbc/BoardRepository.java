package com.ssafying.domain.board.repository.jdbc;

import com.ssafying.domain.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Integer> {

}
