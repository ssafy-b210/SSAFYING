package com.ssafying.domain.bamboo.service;

import com.ssafying.domain.bamboo.dto.request.AddBambooCommentRequest;
import com.ssafying.domain.bamboo.dto.request.AddBambooRequest;
import com.ssafying.domain.bamboo.dto.response.FindDetailBambooResponse;
import com.ssafying.domain.bamboo.dto.response.FindListBambooResponse;
import com.ssafying.domain.bamboo.entity.Bamboo;
import com.ssafying.domain.bamboo.entity.BambooComment;
import com.ssafying.domain.bamboo.repository.jdbc.BambooCommentRepository;
import com.ssafying.domain.bamboo.repository.jdbc.BambooRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
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
    private final UserRepository userRepository;
    private final BambooCommentRepository bambooCommentRepository;

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
    public Long addBambooComment(Long bambooId, AddBambooCommentRequest request) {

        // 작성하려는 유저가 존재하는지 확인
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("유저가 없습니다."));

        // 작성하려는 대나무숲 글이 있는지 확인
        Bamboo bamboo = bambooRepository.findById(bambooId)
                .orElseThrow(() -> (new RuntimeException("대나무숲 글이 존재하지 않습니다.")));

        // 대나무숲 글이 존재한다면 댓글을 작성함
        BambooComment bambooComment = BambooComment.createBambooComment(
                bamboo,
                user,
                request.getContent()
        );

        BambooComment save = bambooCommentRepository.save(bambooComment);


        return save.getId();
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
