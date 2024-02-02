package com.ssafying.domain.user;

import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.shuttle.entity.CampusRegion;
import com.ssafying.domain.shuttle.repository.jdbc.CampusRepository;
import com.ssafying.domain.user.dto.request.CreateUserRequest;
import com.ssafying.domain.user.dto.request.UpdateUserRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.entity.UserStatus;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import com.ssafying.domain.user.service.UserAuthService;
import com.ssafying.domain.user.service.UserService;
import com.ssafying.global.config.jwt.JwtProperties;
import com.ssafying.global.config.jwt.TokenProvider;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;


@ExtendWith(SpringExtension.class)
@SpringBootTest
@Transactional
public class UserServiceTest {

    @Autowired
    UserAuthService userAuthService;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CampusRepository campusRepository;

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private JwtProperties jwtProperties;


    @Test
//    @Rollback(false)
    public void 회원가입() throws Exception{

//        Campus campus1 = new Campus();
//        campus1.setCampusId(1);
//        campus1.setCampusRegion(CampusRegion.SEOUL);
//
//        Campus campus2 = new Campus();
//        campus1.setCampusId(2);
//        campus1.setCampusRegion(CampusRegion.DAEJEON);

//        campusRepository.save(campus1);
//        campusRepository.save(campus2);


        User user = new User();
        LocalDate date = LocalDate.of(1994,5,12);

        //given
        CreateUserRequest req = CreateUserRequest.builder()
                .campusRegion(CampusRegion.DAEJEON)
                .email("ssafy@ssafy.com")
                .password("1234")
                .nickname("소금dldldl")
                .phoneNumber("010-1234-5678")
                .name("이애옹")
                .generation(10)
                .isMajor(false)
                .userStatus(UserStatus.ACTIVE)
                .build();

        Campus campus = campusRepository.findByCampusRegion(req.getCampusRegion())
                .orElseThrow(() -> (new RuntimeException("일치하는 지역이 없습니다.")));

        //when

        user = userAuthService.createUser(req);

        User find = userRepository.findById(user.getId())
                .orElseThrow(() -> (new RuntimeException("추가된 사용자가 없습니다.")));

        //then
        assertThat(user.getEmail()).isEqualTo(find.getEmail());
    }

    @Test
//    @Rollback(false)
    public void 중복_회원_예외() throws Exception {

        User user1 = new User();
        LocalDate date = LocalDate.of(1994, 5, 12);

        // given
        CreateUserRequest req = CreateUserRequest.builder()
                .campusRegion(CampusRegion.DAEJEON)
                .email("ssafy1@ssafy.com")
                .password("1234")
                .nickname("소금")
                .phoneNumber("010-1234-5678")
                .name("이애옹")
                .generation(10)
                .isMajor(false)
                .userStatus(UserStatus.ACTIVE)
                .build();

        // when
        userAuthService.createUser(req);

        // then
        assertThrows(IllegalStateException.class, () -> userAuthService.createUser(req));
    }

    @Test
//    @Rollback(false)
    @Transactional
    public void 회원_정보_수정() throws Exception{

        //given
        User user = new User();
        LocalDate date = LocalDate.of(1994,5,12);
        CreateUserRequest req = CreateUserRequest.builder()
                .campusRegion(CampusRegion.DAEJEON)
                .email("ssafy1@ssafy.com")
                .password("12345")
                .nickname("소금")
                .phoneNumber("010-1234-5678")
                .name("이애옹")
                .generation(10)
                .isMajor(false)
                .userStatus(UserStatus.ACTIVE)
                .build();

        userRepository.save(user);

        UpdateUserRequest updateReq = UpdateUserRequest.builder()
                .nickname("후추")
//                .phoneNumber("010-5678-1234")
                .intro("안녕하세요!")
                .build();

        //when

        User findUser = userRepository.findById(user.getId())
                .orElseThrow(() -> {
                    return new IllegalArgumentException("유저 정보를 찾을 수 없습니다.");
                });

        findUser.setNickname(updateReq.getNickname());
        findUser.setPhoneNumber(updateReq.getPhoneNumber());
        findUser.setIntro(updateReq.getIntro());

        //then

        assertThat(user.getNickname()).isEqualTo(findUser.getNickname());
        System.out.println("user nickname : " + user.getNickname());
        System.out.println("findUser nickname : " + findUser.getNickname());

    }

    @Test
//    @Rollback(false)
    @Transactional
    public void 로그인() throws Exception {

    }





}
