package com.ssafying.domain.user.service;

import com.ssafying.domain.user.dto.request.CreateUserRequest;
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
     * 회원 가입
     */
    @Transactional
    public User createUser(final CreateUserRequest request){

        //중복회원 검증
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalStateException("동일한 이메일로 등록된 회원이 존재합니다.");
        }

        if (userRepository.existsByNickname(request.getNickname())){
            throw new IllegalStateException("이미 사용 중인 닉네임입니다.");
        }

        //user build
        User user = User.createUser(
                request.getCampusId(),
                request.getEmail(),
                request.getPassword(),
                request.getNickname(),
                request.getBirthday(),
                request.getPhoneNumber(),
                request.getName(),
                request.getGeneration(),
                request.isMajor(),
                request.getUserStatus()
        );

        User save = userRepository.save(user);

        return save;

    }


    /*
     * 회원 정보 조회
     */
    @Transactional
    public User DetailUser(int userId){

        //해당 유저 찾기
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("유저 정보가 없습니다."));


        user = User.detailUser(user.getEmail(), user.getNickname(), user.getPhoneNumber(), user.getName(), user.getIntro(), user.getProfileImageUrl());

        return user;

    }



}
