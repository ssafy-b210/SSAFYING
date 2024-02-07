//package com.ssafying.domain.crew;
//
//
//import com.ssafying.domain.crew.dto.request.AddCrewRequest;
//import com.ssafying.domain.crew.entity.Crew;
//import com.ssafying.domain.crew.entity.CrewCategory;
//import com.ssafying.domain.crew.entity.Region;
//import com.ssafying.domain.crew.repository.jdbc.CrewRepository;
//import com.ssafying.domain.crew.service.CrewService;
//import com.ssafying.domain.user.entity.User;
//import com.ssafying.domain.user.repository.jdbc.UserRepository;
//import jakarta.transaction.Transactional;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import java.util.List;
//import java.util.Optional;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//@SpringBootTest
//@Transactional
//public class CrewServiceTest {
//
//    @Autowired CrewService crewService;
//    @Autowired CrewRepository crewRepository;
//    @Autowired UserRepository userRepository;
//
//    @Test
////    @Rollback(false)
//    public void 게시글등록() throws Exception{
//        //given
//        User user = new User();
//        userRepository.save(user);
//
//        AddCrewRequest req = AddCrewRequest.builder()
//                .userId(user.getId())
//                .title("크루생성테스트")
//                .content("내용")
//                .region(Region.DAEJEON)
//                .category(Category.ACTIVITY)
//                .isRecruit(true)
//                .build();
//
//        //when
//        Crew crew = crewService.createCrew(req);
//
//        Optional<Crew> find = crewRepository.findById(crew.getCrewId());
//
//        //then
//        Crew check = find.get();
//        assertThat(crew.getTitle()).isEqualTo("크루생성테스트");
//
//    }
//
//    @Test
////    @Rollback(false)
//    public void 게시글수정() throws Exception{
//
//        //given
//
//        User user = new User();
//        userRepository.save(user);
//
//        AddCrewRequest req = AddCrewRequest.builder()
//                .userId(user.getId())
//                .title("크루수정테스트 제목")
//                .content("내용")
//                .region(Region.DAEJEON)
//                .category(Category.ACTIVITY)
//                .isRecruit(true)
//                .build();
//
//        Crew addedCrew = crewService.createCrew(req);
//
//        UpdateCrewRequest req2 = UpdateCrewRequest.builder()
//                .crewId(addedCrew.getCrewId())
//                .title(addedCrew.getTitle())
//                .content("수정테스트 내용!")
//                .isRecruit(false)
//                .build();
//
//
//        //when
//        addedCrew = crewService.updateCrew(req2);
//        Optional<Crew> find = crewRepository.findById(addedCrew.getCrewId());
//
//        //then
//        Crew updatedCrew = find.get();
//        assertThat(addedCrew.getCrewId()).isEqualTo(updatedCrew.getCrewId());
//    }
//
//    @Test
//    public void testCrewListWithFilter() {
//        // ...
//
//        // Given
//        Crew crew1 = new Crew();
//        crew1.setTitle("Test Crew 1");
//        crew1.setRegion(Region.SEOUL);
//        crew1.setCategory(CrewCategory.ACTIVITY);
//        crew1.setIsRecruit(true);
//
//        Crew crew2 = new Crew();
//        crew2.setTitle("Test Crew 2");
//        crew2.setRegion(Region.BUSAN);
//        crew2.setCategory(CrewCategory.CHALLENGE);
//        crew2.setIsRecruit(false);
//
//        // When
//        List<Crew> responseList = crewService.searchCrew("Test", "SEOUL", "ETC", true);
//
//        // Then
//        assertThat(responseList).hasSize(1);
//        assertThat(responseList.get(0).getTitle()).isEqualTo("Test Crew 1");
//    }
//
//}
