package com.ssafying.domain.board.service;

import com.ssafying.domain.board.dto.request.CreateBoardRequest;
import com.ssafying.domain.board.entity.Board;
import com.ssafying.domain.board.entity.CategoryStatus;
import com.ssafying.domain.board.repository.jdbc.BoardRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@Transactional
public class BoardServiceTest {

    @Autowired BoardService boardService;
    @Autowired BoardRepository boardRepository;
    @Autowired
    UserRepository userRepository;

    @Test
//    @Rollback(false) // rollback 되지 않도록 설정
    public void 게시글작성() throws Exception {
        //Given
        User user = new User();
//        user.setName("순");
        userRepository.save(user);

        CreateBoardRequest req = CreateBoardRequest.builder()
                .userId(user.getId())
                .title("title")
                .content("content")
                .category(CategoryStatus.FREEDOM)
                .isAnonymous(false)
                .build();

        //When
        int boardId = boardService.addBoard(req);

        Optional<Board> find = boardRepository.findById(boardId);

        //Then
        Board board = find.get();
        assertThat(board.getTitle()).isEqualTo("title");
        assertThat(board.getContent()).isEqualTo("content");
    }
}