package com.ssafying.domain.user.service;

import com.ssafying.domain.user.dto.request.UpdateUserRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;


    /*
     * 회원 정보 조회
     */
    @Transactional
    public User findUser(int userId){

        //해당 유저 찾기
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("유저 정보를 찾을 수 없습니다."));

        return user;

    }

    /*
     * 회원 정보 수정
     */
    @Transactional
    public User modifyUser(int userId, UpdateUserRequest request){
        //해당 유저 찾기
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("유저 정보를 찾을 수 없습니다."));

        User updatedUser = User.updateUser(
                user,
                request
        );
        userRepository.save(user);

        return user;
    }


    /*
     * 회원 탈퇴
     */
    @Transactional
    public void removeUser(int userId){

        //사용자 아이디 받아서 삭제
        userRepository.deleteById(userId);

    }


}
