package com.ssafying.domain.board.service;

import com.ssafying.domain.board.dto.request.CreateBoardRequest;
import com.ssafying.domain.board.entity.Board;
import com.ssafying.domain.board.repository.jdbc.BoardRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepositorySDJ;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BoardService {

    private final BoardRepository boardRepository;
    private final UserRepositorySDJ userRepository;

    /**
     * 5.1 게시판 게시글 작성
     *
     * @return
     */
    @Transactional
    public int createBoard(CreateBoardRequest request) {

        //유저가 있는지 확인한 후, 유저가 없다면 익셉션을 발생시킴
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("유저가 없습니다."));

        //디비에 저장할 Board 준비
        Board board = Board.createBoard(
                request.getTitle(),
                request.getContent(),
                request.getCategory(),
                request.isAnonymous(),
                user
        );

        //디비에 Board 저장
        Board save = boardRepository.save(board);

        return save.getId();
    }

    /**
     * 5.2 게시판 게시글 조회
     */


}
