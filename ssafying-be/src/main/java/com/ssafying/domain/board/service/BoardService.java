package com.ssafying.domain.board.service;

import com.ssafying.domain.board.dto.request.AddBoardRequest;
import com.ssafying.domain.board.dto.request.ModifyBoardCommentRequest;
import com.ssafying.domain.board.dto.request.ModifyBoardRequest;
import com.ssafying.domain.board.dto.request.ScrapBoardRequest;
import com.ssafying.domain.board.entity.Board;
import com.ssafying.domain.board.entity.BoardComment;
import com.ssafying.domain.board.entity.BoardScrap;
import com.ssafying.domain.board.repository.jdbc.BoardCommentRepository;
import com.ssafying.domain.board.repository.jdbc.BoardRepository;
import com.ssafying.domain.board.repository.jdbc.BoardScarpRepository;
import com.ssafying.domain.board.service.command.AddBoardCommentCommand;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BoardService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    private final BoardScarpRepository boardScarpRepository;
    private final BoardCommentRepository boardCommentRepository;


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
                request.getIsAnonymous(),
                user
        );

//        디비에 Board 저장
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
     * 5.3.1 게시판 게시글 스크랩 취소
     *
     * @return
     */
    @Transactional
    public int unScrapBoard(ScrapBoardRequest request) {

        //request로 넘어온 userId가 존재하는지 확인
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("유저가 없습니다."));

        //request 로 넘어온 boardId가 존재하는지 확인
        Board board = boardRepository.findById(request.getBoardId())
                .orElseThrow(() -> new RuntimeException("삭제하려는 게시글이 존재하지 않습니다."));

        System.out.println("BoardService.unScrapBoard");

        //게시글 스크랩 취소
        boardScarpRepository.deleteByUserAndBoard(user, board);

        return board.getId();
    }

    /**
     * 5.4 게시판 게시글 상세 조회
     *
     * @return
     */
    public Board findDetailBoard(int boardId) {

        // boardId가 존재하는지 확인
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new RuntimeException("게시글이 없습니다."));

        // 존재한다면 해당 게시글을 상세 조회
        // ResponseDTO에 필요한 내용 : board 내용 + 댓글들


        // board를 Response에 담아서 넘겨줘야할 듯요

        return board;

    }

    /**
     * 5.5 게시판 게시글 삭제
     *
     * @return
     */
    @Transactional
    public int removeBoard(int boardId) {

        //삭제하려는 게시글이 있는지 확인해줌
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> (new RuntimeException("해당 게시글이 존재하지 않습니다.")));

        //게시글이 있다면 게시글을 삭제해줌
        //게시글이 삭제되면 댓글이랑 스크랩도 줄줄이 삭제돼야 함 (cascade 걸어놓음)
        boardRepository.delete(board);

        return board.getId();
    }


    /**
     * 5.6 게시판 게시글 수정
     *
     * @return
     */
    @Transactional
    public int modifyBoard(int boardId, ModifyBoardRequest request) {

        //삭제하려는 게시글이 있는지 확인해줌
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> (new RuntimeException("해당 게시글이 존재하지 않습니다.")));

        //게시글 수정
        board.modifyBoard(
                request.getTitle(),
                request.getContent(),
                request.getCategory()
        );

        return board.getId();
    }

    /**
     * 5.7 게시판 게시글 댓글 작성
     *
     * @return
     */
    @Transactional
    public int addComment(AddBoardCommentCommand command) {

        // 유저 가져오기
        User user = userRepository.findById(command.getUserId())
                .orElseThrow(() -> new RuntimeException("유저가 없습니다."));

        // 해당 게시글이 있는지 확인해줌
        Board board = boardRepository.getReferenceById(command.getBoardId());

        BoardComment parentComment = null;

        // 자식댓글이라면 부모댓글을 찾아줌
        if (command.getParentId() != -1) {
            parentComment = boardCommentRepository.findById(command.getParentId())
                    .orElseThrow(() -> (new RuntimeException("부모댓글이 존재하지 않습니다.")));
        }

        //있다면 comment 를 추가해줌
        BoardComment boardComment = BoardComment.createBoardComment(
                board,
                user,
                command.getContent(),
                false,
                false,
                parentComment
        );

        BoardComment save = boardCommentRepository.save(boardComment);

        return save.getId();
    }

    /**
     * 5.8 게시판 게시글 댓글 삭제
     *
     * @return
     */
    @Transactional
    public String removeComment(int boardCommentId) {

        // 삭제하려는 댓글이 존재하는지 확인
        BoardComment comment = boardCommentRepository.findById(boardCommentId)
                .orElseThrow(() -> (new RuntimeException("해당 댓글이 존재하지 않습니다.")));

        // 댓글 삭제
        // 부모 댓글이라면 자식 댓글까지 삭제해줘야 함
        if ((comment.getParentComment()) == null) {
            List<BoardComment> parentComment = boardCommentRepository.findByParentComment(comment);

            for (BoardComment child : parentComment) {
                boardCommentRepository.deleteById(child.getId());
            }
        }

        boardCommentRepository.deleteById(comment.getId());

        return "success";
    }

    /**
     * 5.9 게시판 게시글 댓글 수정
     *
     * @return
     */
    @Transactional
    public int modifyComment(int boardCommentId, ModifyBoardCommentRequest request) {

        //수정하려는 댓글이 존재하는지 확인
        BoardComment comment = boardCommentRepository.findById(boardCommentId)
                .orElseThrow(() -> (new RuntimeException("해당 댓글이 존재하지 않습니다.")));

        //댓글 수정
        comment.modifyBoard(request.getContent());

        return comment.getId();
    }
}
