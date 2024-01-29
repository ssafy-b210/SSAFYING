package com.ssafying.domain.board.controller;

import com.ssafying.domain.board.dto.request.CreateBoardRequest;
import com.ssafying.domain.board.dto.request.ScrapBoardRequest;
import com.ssafying.domain.board.entity.CategoryStatus;
import com.ssafying.domain.board.service.BoardService;
import com.ssafying.global.result.ResultResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@Api
@RestController
@RequiredArgsConstructor
@RequestMapping("/boards")
public class BoardController {

    private final BoardService boardService;

    /**
     * 5.1 게시판 게시글 작성
     */
    @PostMapping
    public ResponseEntity<ResultResponse> boardAdd(
            @RequestBody @Valid CreateBoardRequest request) {

        boardService.addBoard(request);

        return null;
    }

    /**
     * 5.2 게시판 게시글 조회
     */
    @GetMapping
    public ResponseEntity<ResultResponse> boardList(
            @RequestParam(defaultValue = "1") int pageNo, //몇번째 페이지인지
            @RequestParam String searchCategory, //게시글 중 어떤 카테고리인지
            @RequestParam(required = false) String searchWord //검색어가 있는 경우
    ) {
        boardService.findBoard(pageNo, searchCategory, searchWord);
        CategoryStatus employment = CategoryStatus.valueOf("EMPLOYMENT");

        return null;
    }

    /**
     * 5.3 게시판 게시글 스크랩
     */
    @PostMapping("/scrap")
    public ResponseEntity<ResultResponse> boardScrap(
            @RequestBody @Valid ScrapBoardRequest request
    ) {
        boardService.scrapBoard(request);

        return null;
    }


}
