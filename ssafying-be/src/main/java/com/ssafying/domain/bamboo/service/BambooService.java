package com.ssafying.domain.bamboo.service;

import com.ssafying.domain.bamboo.dto.request.AddBambooCommentRequest;
import com.ssafying.domain.bamboo.dto.request.AddBambooRequest;
import com.ssafying.domain.bamboo.dto.response.BambooCommentResponse;
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

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
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

        // 24시간이 지나지 않은 글 중에서 시간이 적게 남은 친구들을 먼저 보여주는 걸로 ....

        long hoursGap = 24; //24시간이 지나지 않은 스토리를 찾음

        List<Bamboo> bambooList = bambooRepository.findBambooList(
                LocalDateTime.now().minusHours(hoursGap) //24시간 전 시간보다 이후에 등록된 스토리만 찾아옴
        );

        System.out.println("=====================================");
        List<FindListBambooResponse> findListBambooResponses = bambooRepository.countComment();
        for (FindListBambooResponse result : findListBambooResponses) {
            System.out.println("result = " + result);
        }


        return findListBambooResponses;
    }

    /**
     * 4.2 대나무숲 작성
     */
    @Transactional
    public Long addBamboo(@Valid AddBambooRequest request) {

        // 작성하려는 유저가 존재하는지 확인
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("유저가 없습니다."));

        // 대나무숲 글 작성
        Bamboo bamboo = Bamboo.createBamboo(user, request.getContent());

        Bamboo save = bambooRepository.save(bamboo);


        return save.getId();
    }

    /**
     * 4.3 대나무숲 상세 조회
     */
    public FindDetailBambooResponse findDetailBamboo(Long bambooId) {

        LocalDateTime now = LocalDateTime.now(); //현재 시간

        // bambooId 가 존재하는지 확인
        Bamboo bamboo = bambooRepository.findBambooAndBambooComment(bambooId)
                .orElseThrow(() -> (new RuntimeException("해당 대나무숲이 없습니다.")));

        // 24시간이 지났는지 확인해야 함
        Duration diff = Duration.between(bamboo.getCreatedAt().toLocalTime(), now.toLocalTime()); //시간차

        /** 현재 시간과 저장된 시간의 차이를 계산 값으로 test
        if (diff.getSeconds() >= 5) {
            System.out.println("**1**");
            System.out.println("now = " + now);
            System.out.println("bamboo.getCreatedAt() = " + bamboo.getCreatedAt());
        } else {
            System.out.println("**2**");
            System.out.println("now = " + now);
            System.out.println("bamboo.getCreatedAt() = " + bamboo.getCreatedAt());
        }

         System.out.println("=============BambooService.findDetailBamboo");
         */

        if (diff.toHours() >= 24) {
            throw new RuntimeException("해당 대나무숲이 24시간이 지나 삭제되었습니다.");
        }


        //bambooComment 를 BambooCommentResponse 로 변환
        List<BambooCommentResponse> bambooCommentResponseList = new ArrayList<>(); // list 준비

        //해당 게시글에 저장되어있던 댓글 리스트 뽑아오기
        List<BambooComment> commentList = bamboo.getCommentList();
        for (BambooComment comment : commentList) { // 저장되어있던 댓글 하나씩 돌면서 BambooCommentResponse 로 변환
            BambooCommentResponse buildBambooComment = BambooCommentResponse.builder()
                    .content(comment.getContent())
                    .createAt(comment.getCreatedAt())
                    .build();

            bambooCommentResponseList.add(buildBambooComment); // list 에 추가
        }

        // 24시간이 지나지 않은 대나무숲 상세정보 조회
        FindDetailBambooResponse result = FindDetailBambooResponse.builder()
                .content(bamboo.getContent())
                .createdAt(bamboo.getCreatedAt())
                .comments(bambooCommentResponseList)
                .build();

        return result;
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

        // 대나무숲 글이 존재한다면 댓글을 작성함 (디비 저장)
        BambooComment bambooComment = BambooComment.createBambooComment(
                bamboo,
                user,
                request.getContent()
        );

        // 객체에 저장
        bamboo.addComment(bambooComment);

        BambooComment save = bambooCommentRepository.save(bambooComment);


        return save.getId();
    }

    /**
     * 4.5 대나무숲 댓글 삭제
     */
    @Transactional
    public String removeBambooComment(Long bambooCommentId) {

        //삭제하려는 댓글이 존재하는지 확인
        BambooComment bambooComment = bambooCommentRepository.findById(bambooCommentId)
                .orElseThrow(() -> (new RuntimeException("해당 댓글이 존재하지 않습니다.")));

        //댓글 삭제
        bambooCommentRepository.deleteById(bambooComment.getId());


        return "success";
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
