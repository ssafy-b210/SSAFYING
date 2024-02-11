package com.ssafying.domain.recruitment.controller;

import com.ssafying.domain.recruitment.dto.request.SaveRecruitmentScrapRequest;
import com.ssafying.domain.recruitment.dto.response.SaraminResponse;
import com.ssafying.domain.recruitment.service.RecruitmentService;
import com.ssafying.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/recruit")
@Tag(name = "채용공고")
@CrossOrigin("*")
public class RecruitmentController {

    private final RecruitmentService recruitmentService;

    @GetMapping("")
    public ResponseEntity<ResultResponse<List<SaraminResponse>>> saraminList(@RequestParam(name = "code", required = false) String code) {

        List<SaraminResponse> result = recruitmentService.findListSaramin(code);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    @PostMapping("/scrap")
    public ResponseEntity<ResultResponse<Long>> recruitmentScrapAdd(@RequestBody SaveRecruitmentScrapRequest request) {

        Long result = recruitmentService.addRecruitmentScrap(request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    @DeleteMapping("/scrap/{recruitmentScrapId}")
    public ResponseEntity<ResultResponse<Long>> recruitmentScrapAdd(@PathVariable(name = "recruitmentScrapId") Long recruitmentScrapId) {

        Long result = recruitmentService.removeRecruitmentScrap(recruitmentScrapId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }


}
