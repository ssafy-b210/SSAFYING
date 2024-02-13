package com.ssafying.domain.mypage.controller;

import com.ssafying.domain.board.dto.response.FindDetailBoardResponse;
import com.ssafying.domain.board.dto.response.FindListBoardResponse;
import com.ssafying.domain.feed.dto.FeedDto;
import com.ssafying.domain.feed.dto.response.GetFeedResponse;
import com.ssafying.domain.mypage.dto.PortfolioDto;
import com.ssafying.domain.mypage.dto.request.ModifyReadmeRequest;
import com.ssafying.domain.mypage.dto.request.SavePortfolioRequest;
import com.ssafying.domain.mypage.dto.response.FindMypageResponse;
import com.ssafying.domain.mypage.dto.response.FindReadmeResponse;
import com.ssafying.domain.mypage.service.MypageService;
import com.ssafying.domain.recruitment.dto.response.SaraminResponse;
import com.ssafying.domain.user.dto.UserInfoDto;
import com.ssafying.global.dto.HashtagDto;
import com.ssafying.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/mypage")
@Tag(name = "마이페이지")
@CrossOrigin("*")
public class MypageController {

    private final MypageService mypageService;

    /**
     * 6.1 마이페이지 기본조회
     */
    @GetMapping("/{userId}")
    @Operation(summary = "마이페이지를 조회합니다")
    public ResponseEntity<ResultResponse<FindMypageResponse>> mypageDetails(@PathVariable(name = "userId") int userId) {
        FindMypageResponse result = mypageService.findMypage(userId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 6.2 피드에 사용한 해시태그 조회
     */
    @GetMapping("/{userId}/hashtags")
    @Operation(summary = "피드에 사용한 해시태그 조회", description = "해당 유저가 작성한 피드에 사용한 해시태그를 조회")
    public ResponseEntity<ResultResponse<List<HashtagDto>>> UsedHashtagsList(@PathVariable(name = "userId") int userId) {
        List<HashtagDto> result = mypageService.findListUsedHashtags(userId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 6.3.1 작성한 피드 조회
     */
    @GetMapping("/{userId}/feeds")
    public ResponseEntity<ResultResponse<List<FeedDto>>> AuthoredFeedList(@PathVariable(name = "userId") int userId) {
        List<FeedDto> result = mypageService.findAuthoredFeeds(userId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }


    /**
     * 6.3.2 작성한 게시판 조회
     */
    @GetMapping("/{userId}/boards")
    public ResponseEntity<ResultResponse<List<FindListBoardResponse>>> AuthoredBoardList(@PathVariable(name = "userId") int userId) {
        List<FindListBoardResponse> result = mypageService.findAuthoredBoard(userId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 6.4.1 스크랩한 피드 조회
     */
    @GetMapping("/{userId}/feeds/scrap")
    public ResponseEntity<ResultResponse<List<GetFeedResponse>>> ScrapFeedList(@PathVariable(name = "userId") int userId) {

        List<GetFeedResponse> result = mypageService.findScrapFeed(userId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 6.4.2 스크랩한 게시판 조회
     */
    @GetMapping("/{userId}/boards/scrap")
    public ResponseEntity<ResultResponse<List<FindListBoardResponse>>> ScrapBoardList(@PathVariable(name = "userId") int userId) {

        List<FindListBoardResponse> result = mypageService.findScrapBoard(userId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 6.4.3 스크랩한 채용공고 조회
     */
    @GetMapping("/{userId}/recruits/scrap")
    public ResponseEntity<ResultResponse<List<SaraminResponse>>> ScrapRecruitmentList(@PathVariable(name = "userId") int userId) {

        List<SaraminResponse> result = mypageService.findScrapRecruitment(userId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 6.5.1 마이페이지 포트폴리오 링크 조회
     */
    @GetMapping("/{userId}/portfolio")
    @Operation(summary = "포트폴리오 조회")
    public ResponseEntity<ResultResponse<List<PortfolioDto>>> portfolioList(@PathVariable(name = "userId") int userId) {
        List<PortfolioDto> result = mypageService.findPortfolio(userId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 6.5.2 마이페이지 포트폴리오 링크 등록
     */
    @PostMapping("/{userId}/portfolio")
    @Operation(summary = "포트폴리오 등록, 수정, 삭제")
    public ResponseEntity<ResultResponse> portfolioAdd(@PathVariable(name = "userId") int userId,
                                                             @RequestBody @Valid SavePortfolioRequest request) {
        mypageService.controlPortfolio(userId, request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString()));
    }

//    @PostMapping("/{userId}/portfolio")
//    @Operation(summary = "포트폴리오 등록")
//    public ResponseEntity<ResultResponse<Long>> portfolioAdd(@PathVariable(name = "userId") int userId,
//                                                                @RequestBody @Valid SavePortfolioRequest request) {
//        Long result = mypageService.addPortfolio(userId, request);
//
//        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
//    }
//
//    /**
//     * 6.5.3 마이페이지 포트폴리오 링크 수정
//     */
//    @PutMapping("/portfolio/{portfolioId}")
//    @Operation(summary = "포트폴리오 수정")
//    public ResponseEntity<ResultResponse<Long>> portfolioModify(@PathVariable(name = "portfolioId") int portfolioId,
//                                                                @RequestBody @Valid SavePortfolioRequest request) {
//        Long result = mypageService.modifyPortfolio(portfolioId, request);
//        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
//    }
//
//    /**
//     * 6.5.4 마이페이지 포트폴리오 링크 삭제
//     */
//    @DeleteMapping("/portfolio/{portfolioId}")
//    @Operation(summary = "포트폴리오 삭제")
//    public ResponseEntity<ResultResponse<Integer>> portfolioRemove(@PathVariable(name = "portfolioId") int portfolioId) {
//        int result = mypageService.deletePortfolio(portfolioId);
//        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
//    }

    /**
     * 6.6 마이페이지 리드미 작성(수정)
     */
    @PutMapping("{userId}/readme")
    @Operation(summary = "리드미 수정")
    public ResponseEntity<ResultResponse<Integer>> readmeModify(
            @PathVariable(name = "userId") int userId,
            @RequestBody @Valid ModifyReadmeRequest request) {
        int result = mypageService.modifyReadme(userId, request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 6.7 마이페이지 리드미 조회
     */
    @GetMapping("{userId}/readme")
    @Operation(summary = "리드미 조회")
    public ResponseEntity<ResultResponse<FindReadmeResponse>> readmeModify(
            @PathVariable(name = "userId") int userId) {
        FindReadmeResponse result = mypageService.findReadme(userId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }




}
