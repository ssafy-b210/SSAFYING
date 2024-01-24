package com.ssafying.domain.board.service;

import com.ssafying.domain.board.repository.jdbc.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BoardService {

    private final BoardRepository boardRepository;

    /**
     * 5.1 게시판 게시글 작성
     */
    @Transactional
    public void createArticle() {
//        boardRepository.createArticle(); //게시글 작성
    }

    /**
     * 5.2 게시판 게시글 조회
     */







}
