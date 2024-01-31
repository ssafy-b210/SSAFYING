package com.ssafying.global.util;

import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.entity.UserStatus;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@RequiredArgsConstructor
public class AuthUtil {
    private final UserRepository userRepository;

    public int getLoginUserId() {
        try {

//            final String userId = SecurityContextHolder.getContext().getAuthentication().getName();

            User user = new User();
            user.setName("test숭");
            return user.getId();

        } catch (Exception e) {
            throw new RuntimeException();
        }
    }

    public User getLoginUser() {
        try {
			final int userId = Integer.parseInt(SecurityContextHolder.getContext().getAuthentication().getName());
			return userRepository.findById(userId).orElseThrow(() -> new RuntimeException("유저가 없습니다."));
		} catch (Exception e) {
			throw new RuntimeException();
		}
    }
}
