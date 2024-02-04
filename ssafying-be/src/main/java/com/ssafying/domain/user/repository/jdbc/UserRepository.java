package com.ssafying.domain.user.repository.jdbc;

import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    /*
     * 유효성 검사 - 이메일, 닉네임
     * 중복되는 경우 true
     */
    boolean existsByEmail(String email);
    boolean existsByNickname(String nickname);

    Optional<User> findByEmail(String email);
    Optional<User> findByPassword(String password);

}
