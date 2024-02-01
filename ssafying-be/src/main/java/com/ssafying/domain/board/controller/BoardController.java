package com.ssafying.domain.board.controller;

import com.ssafying.domain.board.dto.request.*;
import com.ssafying.domain.board.service.BoardService;
import com.ssafying.domain.board.service.command.AddBoardCommentCommand;
import com.ssafying.global.result.ResultResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@Api
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/boards")
public class BoardController {

    private final BoardService boardService;

    /**
     * 5.1 게시판 게시글 작성
     */
    @PostMapping
    public ResponseEntity<ResultResponse> boardAdd(
            @RequestBody @Valid AddBoardRequest request) {

        //TODO 유저 id 가져오는 방법은 아직 고민 중
        int userId = 1;
        boardService.addBoard(userId, request);

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
//        CategoryStatus employment = CategoryStatus.valueOf("EMPLOYMENT");

        return null;
    }

    /**
     * 5.3 게시판 게시글 스크랩
     */
    @PostMapping("/scrap")
    public ResponseEntity<ResultResponse<Integer>> boardScrap(
            @RequestBody @Valid ScrapBoardRequest request
    ) {
        //TODO 유저 id 가져오는 방법은 아직 고민 중
        int userId = 1;

        int result = boardService.scrapBoard(userId, request);

//        ResultResponse resultResponse = new ResultResponse(result);
//
//        return ResponseEntity.ok(result);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 5.3.1 게시판 게시글 스크랩 취소
     */
    @DeleteMapping("/scrap")
    public ResponseEntity<ResultResponse> boardUnScrap(
            @RequestBody @Valid ScrapBoardRequest request
    ) {
        boardService.unScrapBoard(request);

        return null;
    }

    /**
     * 5.4 게시판 게시글 상세 조회
     */
    @GetMapping("/{boardId}")
    public ResponseEntity<ResultResponse> boardDetails(@PathVariable int boardId){
        boardService.findDetailBoard(boardId);

        return null;
    }

    /**
     * 5.5 게시판 게시글 삭제
     */
    @DeleteMapping("/{boardId}")
    public ResponseEntity<ResultResponse> boardRemove(@PathVariable int boardId){
        boardService.removeBoard(boardId);

        return null;
    }

    /**
     * 5.6 게시판 게시글 수정
     */
    @PutMapping("/{boardId}")
    public ResponseEntity<ResultResponse> boardModify(
            @PathVariable int boardId,
            @RequestBody ModifyBoardRequest request){
        boardService.modifyBoard(boardId, request);

        return null;
    }

    /**
     * 5.7 게시판 게시글 댓글 작성
     */
    @PostMapping("/comments/{boardId}")
    public ResponseEntity<ResultResponse> boardCommentAdd(
            @PathVariable int boardId,
            @RequestBody AddBoardCommentRequest request
    ) {

        //TODO 유저 id 가져오는 방법은 아직 고민 중
        int userId = 1;

        //유저 + boardId + request
        AddBoardCommentCommand command = AddBoardCommentCommand.builder()
                .boardId(boardId)
                .userId(userId)
                .content(request.getContent())
                .isAnonymous(request.isAnonymous())
                .parentId(request.getParentId())
                .build();

//        boardService.addComment(boardId, request);

        boardService.addComment(command);

        return null;
    }

    /**
     * 5.8 게시판 게시글 댓글 삭제
     */
    @DeleteMapping("/comments/{boardCommentId}")
    public ResponseEntity<ResultResponse> boardCommentRemove(
            @PathVariable int boardCommentId,
            @RequestBody RemoveBoardCommentRequest request
    ){
        boardService.removeComment(boardCommentId, request);

        return null;
    }

    /**
     * 5.9 게시판 게시글 댓글 수정
     */
    @PutMapping("/comments/{boardCommentId}")
    public ResponseEntity<ResultResponse> boardCommentModify(
        @PathVariable int boardCommentId,
        @RequestBody ModifyBaordCommentRequest request
    ) {
        boardService.modifyComment(boardCommentId, request);

        return null;
    }

}
