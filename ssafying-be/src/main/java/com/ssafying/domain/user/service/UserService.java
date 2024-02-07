package com.ssafying.domain.user.service;

import com.ssafying.domain.user.dto.request.RemoveUserRequest;
import com.ssafying.domain.user.dto.request.UpdateUserRequest;
import com.ssafying.domain.user.dto.response.UserDetailResponse;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.Remove;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;


    /**
     * 회원 정보 조회
     * (액세스 토큰 발급)
     */
    @Transactional
    public User findUser(int userId){

        //해당 유저 찾기
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("유저 정보를 찾을 수 없습니다."));

        return user;
    }

    /**
     * 회원 정보 조회
     */
    @Transactional
    public UserDetailResponse findUserInfo(int userId){

        //해당 유저 찾기
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("유저 정보를 찾을 수 없습니다."));

        UserDetailResponse response = UserDetailResponse.builder()
                .name(user.getName())
                .nickname(user.getNickname())
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .intro(user.getIntro())
                .build();

        return response;
    }


    /**
     * 회원 정보 수정
     */
    @Transactional
    public int modifyUser(int userId, UpdateUserRequest request){
        //해당 유저 찾기
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("유저 정보를 찾을 수 없습니다."));

        User updatedUser = User.updateUser(
                user,
                request
        );
        userRepository.save(user);

        return user.getId();
    }


    /**
     * 회원 탈퇴
     */
    @Transactional
    public int removeUser(int userId){

        userRepository.deleteById(userId);

        return userId;
    }


}
