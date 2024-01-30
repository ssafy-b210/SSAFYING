package com.ssafying.domain.crew.service;

import com.ssafying.domain.crew.dto.request.AddCrewRequest;
import com.ssafying.domain.crew.dto.request.UpdateCrewRequest;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.crew.repository.CrewRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class CrewService {

    private final CrewRepository crewRepository;
    private final UserRepository userRepository;

    /*
    게시글 등록
     */
    @Transactional
    public Crew addCrew(final AddCrewRequest request){

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("유저가 없습니다."));

        //db에 저장할 crew
        Crew crew = Crew.addCrew(
                request.getTitle(),
                request.getContent(),
                request.getRegion(),
                request.getCategory(),
                request.isRecruit(),
                user
        );

        //db에 crew 저장
        Crew save = crewRepository.save(crew);

        return save;
    }

    /*
    게시글 수정
     */
@Transactional
    public Crew updateCrew(final UpdateCrewRequest request){
        Crew crew = crewRepository.findById(request.getCrewId())
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        crew.updateCrew(request.getCrewId(), request.getTitle(), request.getContent(), request.isRecruit());

        return crew;
}


    /*
    전체 목록 조회
     */
//    public int findAll(){
//
//    }

}
