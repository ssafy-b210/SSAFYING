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
    public User detailUser(int userId){

        //해당 유저 찾기
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("유저 정보를 찾을 수 없습니다."));


        user = User.detailUser(user.getEmail(), user.getNickname(), user.getPhoneNumber(), user.getName(), user.getIntro(), user.getProfileImageUrl());

        return user;

    }

    /*
     * 회원 정보 수정
     */
    @Transactional
    public User UpdateUser(final UpdateUserRequest request){

        //해당 유저 찾기
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("유저 정보를 찾을 수 없습니다."));

        User updateUserInfo = User.updateUser(
                request.getNickname(),
                request.getPhoneNumber(),
                request.getPassword(),
                request.getIntro(),
                request.getProfileImageUrl()
        );

        if (request.getNickname() != null) {
            user.setNickname(request.getNickname());
        }

        if (request.getPhoneNumber() != null) {
            user.setPhoneNumber(request.getPhoneNumber());
        }

        if (request.getPassword() != null) {
            user.setPassword(request.getPassword());
        }

        if (request.getIntro() != null) {
            user.setIntro(request.getIntro());
        }

        if (request.getProfileImageUrl() != null) {
            user.setProfileImageUrl(request.getProfileImageUrl());
        }

        return user;

    }


}
