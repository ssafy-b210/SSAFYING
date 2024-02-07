package com.ssafying.domain.board.repository.jdbc;

import com.ssafying.domain.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Integer> {

//        @Query("""
//           select *
//           from Board b
//           left join BoardComment bc on b=bc.board
//           group by b.id
//
//           """)
//    Board findBoardAndComments();

//    @Query(""){
//        public List<Board> find
//
//    }

//    @Query("""
//    select *
//    from Board b
//    left join BoardComment bc
//    on b = bc.board
//    where b.id = :boardId
//
//    """)
//    List<BoardComment> findBoardComments (@Param("boardId") int boardId);



}
