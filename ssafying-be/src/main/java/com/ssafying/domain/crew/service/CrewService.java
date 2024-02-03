package com.ssafying.domain.crew.service;

import com.ssafying.domain.crew.dto.request.AddCrewRequest;
import com.ssafying.domain.crew.dto.request.ModifyCrewRequest;
import com.ssafying.domain.crew.dto.specification.CrewSpecification;
import com.ssafying.domain.crew.entity.Category;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.crew.entity.Region;
import com.ssafying.domain.crew.repository.jdbc.CrewRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import com.ssafying.domain.user.service.UserAuthService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class CrewService {

    private final CrewRepository crewRepository;
    private final UserRepository userRepository;

    /*
     * 게시글 등록
     */
    @Transactional
    public Crew addCrew(int userId, final AddCrewRequest request){

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("유저가 없습니다."));

        //db에 저장할 crew
        Crew crew = Crew.createCrew(
                request,
                user
        );

        //db에 crew 저장
        Crew save = crewRepository.save(crew);

        return save;
    }

    /*
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

    /*
     * 게시글 상세 조회
     */
    @Transactional
    public Crew findCrew(int crewId){
        Crew crew = crewRepository.findById(crewId)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        return crew;
    }

    /*
     * 게시글 전체 조회
     */
    @Transactional
    public List<Crew> findAllCrews(){
        List<Crew> list = crewRepository.findAll();

        return list;
    }

    /*
     * 게시글 수정
     */
    @Transactional
    public Crew modifyCrew(int crewId, final ModifyCrewRequest request){

        //해당 crew 찾기
        Crew crew = crewRepository.findById(crewId)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        crew = Crew.modifyCrew(
                crew,
                request
        );

        crewRepository.save(crew);

        return crew;
    }

    /*
     * 게시글 검색
     */
    public List<Crew> searchCrew(String title, String region, String category, boolean isRecruit){

        Specification<Crew> spec = (root, query, criteriaBuilder) -> null;

        // title
        if (title != null) {
            spec = spec.and(CrewSpecification.containingTitle(title));
        }

        // region
        if (region != null) {
            spec = spec.and(CrewSpecification.findByRegion(Region.valueOf(region)));
        }

        // category
        if (category != null) {
            spec = spec.and(CrewSpecification.findByCategory(Category.valueOf(category)));
        }

        // isRecruit
        spec = spec.and(CrewSpecification.isRecruit(isRecruit));

        return crewRepository.findAll(spec);

    }


}
