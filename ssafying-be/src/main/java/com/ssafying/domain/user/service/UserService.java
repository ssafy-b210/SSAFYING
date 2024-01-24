package com.ssafying.domain.user.service;

import com.ssafying.domain.user.dto.RegistUserRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.format.datetime.DateFormatter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
    public boolean join(RegistUserRequest request){
        validateDuplicateUser(request); //중복회원검증
//        userRepository.save(request);
        User user = convertToEntity(request);
        userRepository.save(user);
        return true;
    }

    private User convertToEntity(RegistUserRequest request) {
        User user = new User();

        user.setCampusId(request.getCampusId());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setNickname(request.getNickname());
        user.setBirthday(request.getBirthday());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setName(request.getName());
        user.setGeneration(request.getGeneration());
        user.setCreatedAt(LocalDateTime.now());
        return user;
    }
    /*
    중복 회원 검증 (이메일)
     */
    private void validateDuplicateUser(RegistUserRequest request) {
        List<User> findUsers = userRepository.findByEmail(request.getEmail());
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
    public User findOne(int userId){
        return userRepository.findOne(userId);
    }

}
