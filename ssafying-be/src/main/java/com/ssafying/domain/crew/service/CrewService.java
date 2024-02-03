package com.ssafying.domain.crew.service;

import com.ssafying.domain.crew.dto.request.AddCrewRequest;
import com.ssafying.domain.crew.dto.request.ModifyCrewRequest;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.crew.repository.jdbc.CrewRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import com.ssafying.domain.user.service.UserAuthService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class CrewService {

    private final CrewRepository crewRepository;
    private final UserRepository userRepository;

    private final UserAuthService userAuthService;

    /*
     * 게시글 등록
     */
    @Transactional
    public Crew createCrew(int userId, final AddCrewRequest request){

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
    public Crew updateCrew(int crewId, final ModifyCrewRequest request){

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


}
