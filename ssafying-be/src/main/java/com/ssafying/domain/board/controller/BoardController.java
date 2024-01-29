package com.ssafying.domain.board.controller;

import com.ssafying.domain.board.dto.request.CreateBoardRequest;
import com.ssafying.domain.board.service.BoardService;
import com.ssafying.global.result.ResultResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@Api
@RestController
@RequiredArgsConstructor
@RequestMapping("/board")
public class BoardController {

    private final BoardService boardService;

    /**
     * 5.1 게시판 게시글 작성
     */
    @PostMapping("board/article")
    public ResponseEntity<ResultResponse> createBoard(@RequestBody @Valid CreateBoardRequest request) {

        boardService.createBoard(request);


        return null;
    }

    /**
     * 5.2 게시판
     */




}
