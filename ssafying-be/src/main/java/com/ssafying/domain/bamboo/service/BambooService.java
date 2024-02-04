package com.ssafying.domain.bamboo.service;

import com.ssafying.domain.bamboo.dto.request.AddBambooRequest;
import com.ssafying.domain.bamboo.dto.response.FindDetailBambooResponse;
import com.ssafying.domain.bamboo.dto.response.FindListBambooResponse;
import com.ssafying.domain.bamboo.repository.jdbc.BambooRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BambooService {

    private final BambooRepository bambooRepository;

    /**
     * 4.1 대나무숲 조회
     */
    public List<FindListBambooResponse> findListBamboo() {


        return null;
    }

    /**
     * 4.2 대나무숲 작성
     */
    @Transactional
    public int addBamboo(@Valid AddBambooRequest request) {

        return 0;
    }

    /**
     * 4.3 대나무숲 상세 조회
     */
    public FindDetailBambooResponse findDetailBamboo(Long bambooId) {

        return null;
    }


    /**
     * 4.4 대나무숲 댓글 작성
     */
    @Transactional
    public int addBambooComment(Long bambooId) {

        return 0;
    }

    /**
     * 4.5 대나무숲 댓글 삭제
     */
    @Transactional
    public int removeBambooComment(Long bambooCommentId) {

        return 0;
    }

    /**
     * 4.6 대나무숲 글 신고
     */
    @Transactional
    public int addBambooReport(Long bambooId) {


        return 0;
    }


    /**
     * 4.7 대나무숲 댓글 신고
     */
    @Transactional
    public int addBambooCommentReport(Long bambooCommentId) {
        return 0;
    }
}
