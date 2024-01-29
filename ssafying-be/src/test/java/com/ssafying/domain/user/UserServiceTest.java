package com.ssafying.domain.user;

import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.UserRepository;
import com.ssafying.domain.user.service.UserService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Fail.fail;
import static org.junit.jupiter.api.Assertions.assertEquals;
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
    public void 회원가입() throws Exception{
        //given
        User user = new User();
        user.setEmail("ssafy@ssafy.com");

        //when
        int saveId = userService.join(user);

        //then
        assertEquals(user, userRepository.findOne(saveId));
    }

    @Test
    public void 중복_회원_예외() throws Exception{
        //given
        User user1 = new User();
        user1.setEmail("ssafy1@ssafy.com");

        User user2 = new User();
        user2.setEmail("ssafy1@ssafy.com");

        //when
        userService.join(user1);
        assertThrows(IllegalStateException.class, () -> userService.join(user2));
        //then

    }

}
