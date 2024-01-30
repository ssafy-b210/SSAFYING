package com.ssafying.domain.crew;

import com.ssafying.domain.crew.dto.request.AddCrewRequest;
import com.ssafying.domain.crew.entity.Category;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.crew.entity.Region;
import com.ssafying.domain.crew.repository.CrewRepository;
import com.ssafying.domain.crew.service.CrewService;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepositorySDJ;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@Transactional
public class CrewServiceTest {

    @Autowired CrewService crewService;
    @Autowired CrewRepository crewRepository;
    @Autowired UserRepositorySDJ userRepository;

    @Test
//    @Rollback(false)
    public void 게시글등록() throws Exception{
        //given
        User user = new User();
        user.setName("애옹");
        userRepository.save(user);

        AddCrewRequest req = AddCrewRequest.builder()
                .userId(user.getId())
                .title("크루생성테스트")
                .content("내용")
                .region(Region.DAEJEON)
                .category(Category.ACTIVITY)
                .isRecruit(true)
                .build();

        //when
        int crewId = crewService.addCrew(req);

        Optional<Crew> find = crewRepository.findById(crewId);

        //then
        Crew crew = find.get();
        assertThat(crew.getTitle()).isEqualTo("크루생성테스트");

    }

//    @Test
//    public void 전체목록조회() throws Exception{
//        //given
//        Crew crew1 = new Crew();
//        Crew crew2 = new Crew();
//        Crew crew3 = new Crew();
//
//        //when
//        crewService.registCrew(crew1);
//        crewService.registCrew(crew2);
//        crewService.registCrew(crew3);
//
//        List<Crew> list = crewService.findAllCrews();
//
//        //then
//        assertThat(list.size()).isEqualTo(3);
//    }

}
