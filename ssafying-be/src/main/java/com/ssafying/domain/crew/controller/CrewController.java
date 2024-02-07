package com.ssafying.domain.crew.controller;

import com.ssafying.domain.crew.dto.request.AddCrewCommentRequest;
import com.ssafying.domain.crew.dto.request.AddCrewRequest;
import com.ssafying.domain.crew.dto.request.ModifyCrewRequest;
import com.ssafying.domain.crew.dto.response.CrewListResponse;
import com.ssafying.domain.crew.dto.specification.CrewSpecification;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.crew.entity.CrewCategory;
import com.ssafying.domain.crew.entity.CrewComment;
import com.ssafying.domain.crew.entity.Region;
import com.ssafying.domain.crew.repository.jdbc.CrewRepository;
import com.ssafying.domain.crew.service.CrewService;
import com.ssafying.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/crew")
@Tag(name = "구해요 게시판")
@CrossOrigin("*")
public class CrewController {

    private final CrewService crewService;
    private final CrewRepository crewRepository;

    /**
     * 10.1 게시글 작성
     */
    @PostMapping
    @Operation(summary = "구인글 작성")
    public ResponseEntity<ResultResponse<Integer>> crewAdd(@RequestBody @Valid AddCrewRequest request) {

        int result = crewService.addCrew(request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 10.2 게시글 삭제
     */
    @DeleteMapping("/{crewId}")
    @Operation(summary = "구인글 삭제")
    public ResponseEntity<ResultResponse<Integer>> crewRemove(@PathVariable(name = "crewId") int crewId){

        int result = crewService.removeCrew(crewId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 10.3 게시글 상세 조회
     */
    @GetMapping("/{crewId}")
    @Operation(summary = "구인글 상세 조회")
    public ResponseEntity<ResultResponse> crewDetails(
            @PathVariable(name = "crewId")int crewId){

        crewService.findCrew(crewId);

        return null;
    }

    /**
     * 10.4 게시글 전체 목록 조회
     */
    @GetMapping
    @Operation(summary = "구인글 전체 조회")
    public List<Crew> crewList(
            @RequestParam(name = "title", required = false) String title,
            @RequestParam(name = "region", required = false) String region,
            @RequestParam(name = "category", required = false) String category,
            @RequestParam(name = "isRecruit", required = false) boolean isRecruit
    ) {

        List<Crew> list = crewService.searchCrew(title, region, category, isRecruit);

        return list;
    }

    /**
     * 10.5 게시글 수정
     */
    @PatchMapping("/{crewId}")
    @Operation(summary = "구인글 수정")
    public ResponseEntity<ResultResponse<Integer>> crewModify(@PathVariable(name = "crewId") int crewId,
                          @RequestBody final ModifyCrewRequest request){

       int result = crewService.modifyCrew(crewId, request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(),result));
    }

    /**
     * 10.6 게시글 검색
     */
    @GetMapping("/search")
    @Operation(summary = "구인글 검색")
    public List<Crew> crewSearch(
            @RequestParam(name = "title", required = false) String title,
            @RequestParam(name = "region", required = false) String region,
            @RequestParam(name = "category", required = false) String category,
            @RequestParam(name = "isRecruit", required = false) boolean isRecruit
    ){

            List<Crew> list = crewService.searchCrew(title, region, category, isRecruit);

            if(list.isEmpty()){
                return list;
            }else{
                throw new RuntimeException("검색 결과를 찾을 수 없습니다.");
            }
    }

    /**
     * 10.7 댓글 작성
     */
    @PostMapping("/comments/{crewId}")
    @Operation(summary = "댓글 작성")
    public ResponseEntity<ResultResponse<Integer>> crewCommentAdd(@PathVariable(name = "crewId") int crewId,
                              @RequestBody AddCrewCommentRequest request){

        int result = crewService.addComment(crewId, request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }


    /**
     * 10.8 댓글 삭제
     */
    @DeleteMapping("comments/{crewCommentId}")
    @Operation(summary = "댓글 삭제")
    public ResponseEntity<ResultResponse<Integer>> crewCommentRemove(@PathVariable(name = "crewCommentId") int crewCommentId){

        int result = crewService.removeComment(crewCommentId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

}
