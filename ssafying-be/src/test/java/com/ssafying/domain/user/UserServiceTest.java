package com.ssafying.domain.user;

import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.shuttle.entity.CampusRegion;
import com.ssafying.domain.user.dto.CreateUserRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.entity.UserStatus;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import com.ssafying.domain.user.service.UserService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;


@ExtendWith(SpringExtension.class)
@SpringBootTest
@Transactional
public class UserServiceTest {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;


    @Test
//    @Rollback(false)
    public void 회원가입() throws Exception{

        User user = new User();
        LocalDate date = LocalDate.of(1994,5,12);
        Campus campus = new Campus();


        //given
        CreateUserRequest req = CreateUserRequest.builder()
//                .campusId()
                .email("ssafy123@ssafy.com")
                .password("1234")
                .nickname("소금1")
                .birthday(date)
                .phoneNumber("010-1234-5678")
                .name("이애옹")
                .generation(10)
                .isMajor(false)
                .userStatus(UserStatus.ACTIVE)
                .build();

        //when

        user = userService.createUser(req);

        Optional<User> find = userRepository.findById(user.getId());

        //then
        User check = find.get();
        assertThat(user.getEmail()).isEqualTo(check.getEmail());
    }

    @Test
//    @Rollback(false)
    public void 중복_회원_예외() throws Exception {

        User user1 = new User();
        LocalDate date = LocalDate.of(1994, 5, 12);

        // given
        CreateUserRequest req = CreateUserRequest.builder()
                .email("ssafy1@ssafy.com")
                .password("1234")
                .nickname("소금")
                .birthday(date)
                .phoneNumber("010-1234-5678")
                .name("이애옹")
                .generation(10)
                .isMajor(false)
                .userStatus(UserStatus.ACTIVE)
                .build();

        // when
        userService.createUser(req);

        // then
        assertThrows(IllegalStateException.class, () -> userService.createUser(req));
    }



}
