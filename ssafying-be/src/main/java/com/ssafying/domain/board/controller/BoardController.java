package com.ssafying.domain.board.controller;

import com.ssafying.domain.board.dto.request.*;
import com.ssafying.domain.board.dto.response.FindDetailBoardResponse;
import com.ssafying.domain.board.dto.response.FindListBoardResponse;
import com.ssafying.domain.board.entity.CategoryStatus;
import com.ssafying.domain.board.service.BoardService;
import com.ssafying.domain.board.service.command.AddBoardCommentCommand;
import com.ssafying.global.result.ResultResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@Api
@RestController
@RequiredArgsConstructor
@RequestMapping("/boards")
@CrossOrigin("*")
public class BoardController {

    private final BoardService boardService;

    /**
     * 5.1 게시판 게시글 작성
     */
    @PostMapping
    public ResponseEntity<ResultResponse<Integer>> boardAdd(
            @RequestBody @Valid AddBoardRequest request) {

        int result = boardService.addBoard(request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 5.2 게시판 게시글 조회
     */
    @GetMapping
    public ResponseEntity<ResultResponse<List<FindListBoardResponse>>> boardList(
            /* @RequestParam(defaultValue = "1") int pageNo, //몇번째 페이지인지 */
            @RequestParam(name = "searchCategory", required = false) CategoryStatus searchCategory, //게시글 중 어떤 카테고리인지
            @RequestParam(name = "searchWord", required = false) String searchWord //검색어가 있는 경우
    ) {
        System.out.println("searchCategory = " + searchCategory);
        System.out.println("searchWord = " + searchWord);

        List<FindListBoardResponse> result = boardService.findBoard(/*pageNo,*/ searchCategory, searchWord);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }


    /**
     * 5.3 게시판 게시글 스크랩
     */
    @PostMapping("/scrap")
    public ResponseEntity<ResultResponse<Integer>> boardScrap(
            @RequestBody @Valid ScrapBoardRequest request
    ) {

        int result = boardService.scrapBoard(request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 5.3.1 게시판 게시글 스크랩 취소
     */
    @DeleteMapping("/scrap")
    public ResponseEntity<ResultResponse<Integer>> boardUnScrap(
            @RequestBody @Valid ScrapBoardRequest request
    ) {

        int result = boardService.unScrapBoard(request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 5.4 게시판 게시글 상세 조회
     */
    @GetMapping("/{boardId}")
    public ResponseEntity<ResultResponse<FindDetailBoardResponse>> boardDetails(
            @PathVariable(name = "boardId") int boardId) {

        //우선 board 로 받아오고 controller 에서 예쁘게 정리함
        FindDetailBoardResponse result = boardService.findDetailBoard(boardId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 5.5 게시판 게시글 삭제
     */
    @DeleteMapping("/{boardId}")
    public ResponseEntity<ResultResponse<Integer>> boardRemove(
            @PathVariable(name = "boardId") int boardId) {

        int result = boardService.removeBoard(boardId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 5.6 게시판 게시글 수정
     */
    @PatchMapping("/{boardId}")
    public ResponseEntity<ResultResponse<Integer>> boardModify(
            @PathVariable(name = "boardId") int boardId,
            @RequestBody ModifyBoardRequest request){
        int result = boardService.modifyBoard(boardId, request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 5.7 게시판 게시글 댓글 작성
     */
    @PostMapping("/comments/{boardId}")
    public ResponseEntity<ResultResponse<Integer>> boardCommentAdd(
            @PathVariable(name = "boardId") int boardId,
            @RequestBody AddBoardCommentRequest request
    ) {

        //boardId + request 를 controller 로 보내줌
        AddBoardCommentCommand command = AddBoardCommentCommand.builder()
                .boardId(boardId)
                .userId(request.getUserId())
                .content(request.getContent())
                .isAnonymous(request.getIsAnonymous())
                .parentId(request.getParentId())
                .build();

        int result = boardService.addComment(command);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 5.8 게시판 게시글 댓글 삭제
     */
    @DeleteMapping("/comments/{boardCommentId}")
    public ResponseEntity<ResultResponse<String>> boardCommentRemove(
            @PathVariable(name = "boardCommentId") int boardCommentId
    ){

        String result = boardService.removeComment(boardCommentId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 5.9 게시판 게시글 댓글 수정
     */
    @PatchMapping("/comments/{boardCommentId}")
    public ResponseEntity<ResultResponse<Integer>> boardCommentModify(
            @PathVariable(name = "boardCommentId") int boardCommentId,
            @RequestBody ModifyBoardCommentRequest request
    ) {
        int result = boardService.modifyComment(boardCommentId, request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }
}