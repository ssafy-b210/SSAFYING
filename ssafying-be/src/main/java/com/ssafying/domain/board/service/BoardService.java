package com.ssafying.domain.board.service;

import com.ssafying.domain.board.dto.request.*;
import com.ssafying.domain.board.entity.Board;
import com.ssafying.domain.board.entity.BoardScrap;
import com.ssafying.domain.board.repository.jdbc.BoardRepository;
import com.ssafying.domain.board.repository.jdbc.BoardScarpRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepositorySDJ;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BoardService {

    private final BoardRepository boardRepository;
    private final UserRepositorySDJ userRepository;
    private final BoardScarpRepository boardScarpRepository;

    /**
     * 5.1 게시판 게시글 작성
     *
     * @return
     */
    @Transactional
    public int addBoard(AddBoardRequest request) {

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
    public List<Board> findBoard(int pageNo, String searchCategory, String searchWord) {

        //searchCategory 검사하기
        //searchCategory 가 enum 값 중에서 없다면? 에러

        //**스크랩여부, 유저이름, 익명여부, 제목,필요

//        boardRepository.

        return null;
    }

    /**
     * 5.3 게시판 게시글 스크랩
     */
    @Transactional
    public int scrapBoard(ScrapBoardRequest request) {

        //request로 넘어온 userId가 존재하는지 확인
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("유저가 없습니다."));

        //request 로 넘어온 boardId가 존재하는지 확인
        Board board = boardRepository.findById(request.getBoardId())
                .orElseThrow(() -> new RuntimeException("스크랩하려는 게시글이 존재하지 않습니다."));

        //유저와 스크랩하려는 게시글이 존재한다면 BoardScrap 생성
        BoardScrap boardScrap = BoardScrap.createBoardScrap(user, board);

        //디비에 저장
        BoardScrap save = boardScarpRepository.save(boardScrap);

        return save.getId();
    }

    /**
     * 5.4 게시판 게시글 상세 조회
     *
     * @return
     */
    public Board findDetailBoard(int boardId) {

        //boardId가 존재하는지 확인
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new RuntimeException("게시글이 없습니다."));


        //존재한다면 해당 게시글을 상세 조회

        //board를 Response에 담아서 넘겨줘야할 듯요

        return board;

    }

    /**
     * 5.5 게시판 게시글 삭제
     */
    @Transactional
    public void removeBoard(int boardId) {
    }

    /**
     * 5.6 게시판 게시글 수정
     */
    @Transactional
    public void modifyBoard(int boardId, ModifyBoardRequest request) {
    }

    /**
     * 5.7 게시판 게시글 댓글 작성
     */
    @Transactional
    public void addComment(int boardId, AddBoardCommentRequest request) {
    }

    /**
     * 5.8 게시판 게시글 댓글 삭제
     */
    @Transactional
    public void removeComment(int boardCommentId, RemoveBoardCommentRequest request) {
    }

    /**
     * 5.9 게시판 게시글 댓글 수정
     */
    @Transactional
    public void modifyComment(int boardCommentId, ModifyBaordCommentRequest request) {
    }
}
