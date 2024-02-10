package com.ssafying.domain.board.repository.jdbc;

import com.ssafying.domain.board.entity.BoardComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BoardCommentRepository extends JpaRepository<BoardComment, Integer> {

    List<BoardComment> findByParentComment(BoardComment parentComment);


    /*
    select *
from board_comment bc
where bc.parent_comment_id = 1;
     */

    @Query("""
                select bc
                from BoardComment bc
                where bc.parentComment.id = :parentId
            """)
    List<BoardComment> findChildComment(@Param("parentId") int parentId);



}
