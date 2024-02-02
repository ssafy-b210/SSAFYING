package com.ssafying.domain.board.repository.jdbc;

import com.ssafying.domain.board.entity.Board;
import com.ssafying.domain.board.entity.BoardScrap;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardScarpRepository extends JpaRepository<BoardScrap, Integer> {

    public int deleteByUserAndBoard(User user, Board board);
}
