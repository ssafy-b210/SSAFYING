package com.ssafying.domain.crew.service;

import com.ssafying.domain.crew.dto.request.AddCrewCommentRequest;
import com.ssafying.domain.crew.dto.request.AddCrewRequest;
import com.ssafying.domain.crew.dto.request.ModifyCrewRequest;
import com.ssafying.domain.crew.dto.response.CrewDetailResponse;
import com.ssafying.domain.crew.dto.response.CrewListResponse;
import com.ssafying.domain.crew.dto.specification.CrewSpecification;
import com.ssafying.domain.crew.entity.Category;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.crew.entity.CrewComment;
import com.ssafying.domain.crew.entity.Region;
import com.ssafying.domain.crew.repository.jdbc.CrewCommentsRepository;
import com.ssafying.domain.crew.repository.jdbc.CrewRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class CrewService {

    private final CrewRepository crewRepository;
    private final UserRepository userRepository;
    private final CrewCommentsRepository crewCommentsRepository;

    /**
     * 게시글 등록
     */
    @Transactional
    public int addCrew(final AddCrewRequest request){

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("유저 정보를 찾을 수 없습니다."));

        //db에 저장할 crew
        Crew crew = Crew.createCrew(
                request,
                user
        );

        //db에 crew 저장
        Crew savedCrew = crewRepository.save(crew);

        return savedCrew.getCrewId();
    }

    /**
     * 게시글 삭제
     */
    @Transactional
    public int removeCrew(int crewId){

        //해당 crew 찾기
        Crew crew = crewRepository.findById(crewId)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        crewRepository.delete(crew);

        return crewId;
    }

    /**
     * 게시글 상세 조회
     */
    @Transactional
    public CrewDetailResponse findCrew(int crewId){
        Crew crew = crewRepository.findById(crewId)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        CrewDetailResponse response = CrewDetailResponse.builder()
                .crewId(crew.getCrewId())
                .title(crew.getTitle())
                .nickname(crew.getUser().getNickname())
                .content(crew.getContent())
                .region(crew.getRegion())
                .category(crew.getCategory())
                .isRecruit(crew.getIsRecruit())
                .comments(crew.getComments())
                .build();

        return response;
    }

    /**
     * 게시글 전체 조회
     */
    @Transactional
    public List<CrewListResponse> findAllCrews(){
        List<Crew> list = crewRepository.findAll();

        List<CrewListResponse> responseList = new ArrayList<>();

        for(Crew crew : list){
            responseList.add(CrewListResponse.builder()
                            .title(crew.getTitle())
                            .nickname(crew.getUser().getNickname())
                            .content(crew.getContent())
                            .category(crew.getCategory())
                            .isRecruit(crew.getIsRecruit())
                            .region(crew.getRegion())
                            .build());
        }


        return responseList;
    }

    /**
     * 게시글 수정
     */
    @Transactional
    public int modifyCrew(int crewId, final ModifyCrewRequest request){

        //해당 crew 찾기
        Crew crew = crewRepository.findById(crewId)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        crew = Crew.modifyCrew(
                crew,
                request
        );

        crewRepository.save(crew);

        return crew.getCrewId();
    }

    /**
     * 게시글 검색
     */
    public List<CrewListResponse> searchCrew(String title, String region, String category){

        Specification<Crew> spec = Specification.where(null);

        if (title != null && !title.isEmpty()) {
            spec = spec.and(CrewSpecification.containingTitle(title));
        }

        if (region != null && !region.isEmpty()) {
            spec = spec.and(CrewSpecification.findByRegion(Region.valueOf(region)));
        }

        if (category != null && !category.isEmpty()) {
            spec = spec.and(CrewSpecification.findByCategory(Category.valueOf(category)));
        }

//        if (isRecruit != null) {
//            spec = spec.and(CrewSpecification.isRecruit(isRecruit));
//        }else{
//            spec = spec.and(CrewSpecification.isRecruit(true));
//            spec = spec.and(CrewSpecification.isRecruit(false));
//        }

        List<CrewListResponse> responseList = new ArrayList<>();

        List<Crew> list = crewRepository.findAll(spec);

        for(Crew crew : list){
            responseList.add(CrewListResponse.builder()
                    .crewId(crew.getCrewId())
                    .title(crew.getTitle())
                    .nickname(crew.getUser().getNickname())
                    .category(crew.getCategory())
                    .content(crew.getContent())
                    .isRecruit(crew.getIsRecruit())
                    .region(crew.getRegion())
                    .build());
        }


        return responseList;

    }

    /**
     * 댓글 등록
     */
    @Transactional
    public int addComment(int crewId, AddCrewCommentRequest request){

        //작성자 찾기
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("유저를 찾을 수 없습니다."));

        //게시글 찾기
        Crew crew = crewRepository.findById(crewId)
                .orElseThrow(() -> new RuntimeException("해당 게시글을 찾을 수 없습니다."));

        CrewComment parentComment = null;

        //자식 댓글이라면 부모 댓글 달아줌
        if(request.getParentId() != -1){
            parentComment = crewCommentsRepository.findById(request.getParentId())
                    .orElseThrow(() -> new RuntimeException("부모 댓글이 존재하지 않습니다."));
        }

        //comment 추가
        CrewComment comment = CrewComment.addCrewComment(
                crew,
                user,
                parentComment,
                request.getContent()
        );

        //댓글 등록
        CrewComment savedComment = crewCommentsRepository.save(comment);

        return savedComment.getId();
    }

    /**
     * 댓글 삭제
     */
    @Transactional
    public int removeComment(int crewCommentId){

        //삭제하려는 댓글이 존재하는지 확인
        CrewComment comment = crewCommentsRepository.findById(crewCommentId)
                .orElseThrow(() -> new RuntimeException("해당 댓글이 존재하지 않습니다."));

        //부모 댓글이라면 자식 댓글까지 삭제
        if(comment.getParentComment() == null){
            List<CrewComment> parentComment = crewCommentsRepository.findByParentComment(comment);

            for(CrewComment child : parentComment){
                crewCommentsRepository.deleteById(child.getId());
            }
        }

        crewCommentsRepository.deleteById(comment.getId());

        return comment.getId();
    }


}
