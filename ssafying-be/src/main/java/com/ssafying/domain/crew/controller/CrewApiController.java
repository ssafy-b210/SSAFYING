package com.ssafying.domain.crew.controller;

import com.ssafying.domain.crew.dto.request.AddCrewRequest;
import com.ssafying.domain.crew.dto.request.ModifyCrewRequest;
import com.ssafying.domain.crew.dto.response.AddCrewResponse;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.crew.service.CrewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/crew")
public class CrewApiController {

    private final CrewService crewService;

    /*
     * 10.1 게시글 작성
     */
    @PostMapping
    public int registCrew(@RequestBody @Valid AddCrewRequest request) {

        int userId = 1;
        Crew crew = crewService.createCrew(userId, request);

        return crew.getCrewId();
    }

    /*
     * 10.2 게시글 삭제
     */
    @DeleteMapping("/{crewId}")
    public int removeCrew(@PathVariable(name = "crewId") int crewId){

        crewService.removeCrew(crewId);

        return crewId;
    }

    /*
     * 10.5 게시글 수정
     */
    @PatchMapping("/{crewId}")
    public int updateCrew(@PathVariable(name = "crewId") int crewId,
                          @RequestBody final ModifyCrewRequest request){
        crewService.updateCrew(crewId, request);

        return crewId;
    }

    /*
    전체 목록 조회
     */
//    @GetMapping("/crew")
//    public List<AddCrewResponse> findAll(){
//        return crewService.findAll();
//    }


}
