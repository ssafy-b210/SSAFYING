package com.ssafying.domain.crew.controller;

import com.ssafying.domain.crew.dto.request.AddCrewRequest;
import com.ssafying.domain.crew.dto.request.ModifyCrewRequest;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.crew.service.CrewService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/crew")
@Tag(name = "CREW")
public class CrewApiController {

    private final CrewService crewService;

    /*
     * 10.1 게시글 작성
     */
    @PostMapping
    @Operation(summary = "구인글 작성")
    public int registCrew(@RequestBody @Valid AddCrewRequest request) {

        int userId = 1;
        Crew crew = crewService.createCrew(userId, request);

        return crew.getCrewId();
    }

    /*
     * 10.2 게시글 삭제
     */
    @DeleteMapping("/{crewId}")
    @Operation(summary = "구인글 삭제")
    public int removeCrew(@PathVariable(name = "crewId") int crewId){

        crewService.removeCrew(crewId);

        return crewId;
    }

    /*
     * 10.3 게시글 상세 조회
     */

    /*
     * 10.4 게시글 전체 목록 조회
     */
    @GetMapping
    @Operation(summary = "구인글 전체 조회")
    public List<Crew> findAllCrew(){

        List<Crew> list = crewService.findAllCrews();

        return list;

    }

    /*
     * 10.5 게시글 수정
     */
    @PatchMapping("/{crewId}")
    @Operation(summary = "구인글 수정")
    public int updateCrew(@PathVariable(name = "crewId") int crewId,
                          @RequestBody final ModifyCrewRequest request){
        crewService.updateCrew(crewId, request);

        return crewId;
    }

}
