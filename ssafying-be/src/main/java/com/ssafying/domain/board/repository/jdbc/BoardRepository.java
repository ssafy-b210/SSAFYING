package com.ssafying.domain.board.repository.jdbc;

import com.ssafying.domain.board.entity.Board;
import com.ssafying.domain.board.entity.CategoryStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Integer> {
    @Query("""
            select b
            from Board b
            where b.category = :searchCategory
            and b.title like concat('%', :searchWord, '%')
            """)
    List<Board> findBoardList(@Param("searchCategory") CategoryStatus searchCategory,
                              @Param("searchWord") String searchWord);

    List<Board> findByTitleContaining(String searchWord);

    List<Board> findByCategory(CategoryStatus searchCategory);

    @Query("""
            select b
            from Board b
            """)
    List<Board> findBoard();

    @Query("""
            select count(*)
            from BoardScrap bs
            where bs.user.id = :userId
            and bs.board.id = :boardId
            """)
    int findIsScrap(@Param("boardId") int boardId, @Param("userId") int userId);

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
