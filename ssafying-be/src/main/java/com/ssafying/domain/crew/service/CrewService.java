package com.ssafying.domain.crew.service;

import com.ssafying.domain.crew.dto.request.AddCrewRequest;
import com.ssafying.domain.crew.dto.response.AddCrewResponse;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.crew.repository.CrewRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepositorySDJ;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
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
    private final UserRepositorySDJ userRepository;

    /*
    게시글 등록
     */
    @Transactional
    public int addCrew(final AddCrewRequest request){

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

        return save.getCrewId();
    }
    /*
    게시글 수정
     */
//    @Transactional
//    public int update(final int id, final AddCrewRequest params){
//        Crew entity = crewRepository.findById(id).orElse(null);
//        entity.Update(params.getTitle(), params.getContent(), params.isStatus());
//        return id;
//    }


    /*
    전체 목록 조회
     */
//    public List<AddCrewResponse> findAll(){
//
//        Sort sort = Sort.by(Sort.Direction.DESC, "id", "createdAt");
//        List<Crew> list = crewRepository.findAll(sort);
//        return list.stream().map(AddCrewResponse::new).collect(Collectors.toList());
//
//    }

}
