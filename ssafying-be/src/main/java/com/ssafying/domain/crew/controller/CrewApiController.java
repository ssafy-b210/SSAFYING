package com.ssafying.domain.crew.controller;

import com.ssafying.domain.crew.dto.request.AddCrewRequest;
import com.ssafying.domain.crew.dto.request.UpdateCrewRequest;
import com.ssafying.domain.crew.dto.response.AddCrewResponse;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.crew.service.CrewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CrewApiController {

    private final CrewService crewService;

    /*
    게시글 작성
     */
    @PostMapping("/crew")
    public ResponseEntity<AddCrewResponse> registCrew(@RequestBody @Valid AddCrewRequest request) {
        Crew registedCrew = crewService.addCrew(request);

        return null;
    }

        /*
    게시글 수정
     */
    @PutMapping("/crew/{crewId}")
    public ResponseEntity<AddCrewResponse> updateCrew(@PathVariable final int crewId, @RequestBody final UpdateCrewRequest request){
        crewService.updateCrew(request);

        return null;
    }

    /*
    전체 목록 조회
     */
//    @GetMapping("/crew")
//    public List<AddCrewResponse> findAll(){
//        return crewService.findAll();
//    }


}
