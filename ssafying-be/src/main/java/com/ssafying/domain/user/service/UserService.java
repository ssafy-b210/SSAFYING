package com.ssafying.domain.user.service;

import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    /*
    회원 가입
     */
    @Transactional
    public int join(User user){
        validateDuplicateUser(user); //중복회원검증
        userRepository.save(user);
        return user.getId();
    }

    /*
    중복 회원 검증 (이메일)
     */
    private void validateDuplicateUser(User user) {
        List<User> findUsers = userRepository.findByEmail(user.getEmail());
        if(!findUsers.isEmpty()){
            throw new IllegalStateException("이미 존재하는 이메일입니다.");
        }
    }

    /*
    회원 전체 조회
     */
    public List<User> findUsers(){
        return userRepository.findAll();
    }

    /*
    회원 1명 조회 (id)
     */
    public User findeOne(int userId){
        return userRepository.findOne(userId);
    }

}
