package com.ssafying.domain.follow.service;

import com.ssafying.domain.follow.dto.AddFollowRequest;
import com.ssafying.domain.follow.entity.Follow;
import com.ssafying.domain.follow.repository.jdbc.FollowRepository;
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
public class FollowService {

    private final FollowRepository followRepository;
    private final UserRepository userRepository;

    /**
     * 2.1 팔로잉 조회
     */

    /**
     * 2.2 팔로워 조회
     */

    /**
     * 2.3 회원 검색
     */

    /**
     * 2.4 팔로우
     */
    @Transactional
    public Follow follow(AddFollowRequest request){

        User fromUser = userRepository.findById(request.getFromUserId())
                .orElseThrow(() -> new RuntimeException("회원을 찾을 수 없습니다."));

        User toUser = userRepository.findById(request.getToUserId())
                .orElseThrow(() -> new RuntimeException("팔로우 하려는 회원을 찾을 수 없습니다."));

        //자기 자신 팔로우 시 에러
        if(fromUser == toUser){
            throw new RuntimeException("자기 자신을 팔로우 할 수 없습니다.");
        }

        //중복 팔로우 x
        if(followRepository.findFollow(fromUser, toUser).isPresent()){
            throw new RuntimeException("이미 팔로우 한 유저입니다.");
        }

        Follow follow = Follow.addFollow(fromUser, toUser);

        followRepository.save(follow);

        return follow;
    }

    /**
     * 2.5 언팔로우
     */

}
