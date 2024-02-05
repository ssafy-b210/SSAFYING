package com.ssafying.domain.follow.service;

import com.ssafying.domain.follow.dto.request.AddFollowRequest;
import com.ssafying.domain.follow.dto.response.FindFollowerListResponse;
import com.ssafying.domain.follow.dto.response.FindFollowingListResponse;
import com.ssafying.domain.follow.entity.Follow;
import com.ssafying.domain.follow.repository.jdbc.FollowRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class FollowService {

    private final FollowRepository followRepository;
    private final UserRepository userRepository;


    /**
     * 2.1 팔로잉 조회
     * selectedUser 가 팔로우 한 사람들 -> fromUser 에서 검색해서 찾음
     */
    @Transactional
    public List<FindFollowingListResponse> followingList(int userId){

        User selectedUser = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("조회하려는 회원 정보를 찾을 수 없습니다."));

        List<Follow> followList = followRepository.findByFromUser(selectedUser);

        List<FindFollowingListResponse> responseList = new ArrayList<>();

        for (Follow follow : followList) {
            User toUser = follow.getToUser();
            responseList.add(
                    FindFollowingListResponse.builder()
                            .id(toUser.getId())
                            .nickname(toUser.getNickname())
                            .profileImageUrl(toUser.getProfileImageUrl())
                            .build()
            );
        }

        return responseList;
    }

    /**
     * 2.2 팔로워 조회
     * selectedUser 를 팔로우 한 사람들 -> toUser 에서 검색해서 찾음
     */
    @Transactional
    public List<FindFollowerListResponse> followerList(int userId){

        User selectedUser = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("조회하려는 회원 정보를 찾을 수 없습니다."));

        List<Follow> followList = followRepository.findByToUser(selectedUser);

        List<FindFollowerListResponse> responseList = new ArrayList<>();

        for (Follow follow : followList) {
            User fromUser = follow.getFromUser();
            responseList.add(
                    FindFollowerListResponse.builder()
                            .id(fromUser.getId())
                            .nickname(fromUser.getNickname())
                            .profileImageUrl(fromUser.getProfileImageUrl())
                            .build()
            );
        }

        return responseList;
    }

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
//    @Transactional
//    public Follow unFollow


    /**
     * 2.6 추천친구
     */

    /**
     * 로그인 한 사용자와의 관계를 알기 위한 메서드
     */
//    protected String findStatus(FollowDTO dto) {
//
//        User selectedUser = userRepository.findById(dto.getSelectedUserId())
//                .orElseThrow(() -> new RuntimeException("회원을 찾을 수 없습니다."));
//
//        User requestUSer = userRepository.findById(dto.getRequestUserId())
//                .orElseThrow(() -> new RuntimeException("회원을 찾을 수 없습니다."));
//
//        if (dto.getSelectedUserId() == dto.getRequestUserId())
//            return "self"; //나
//
//        if (followRepository.findFollow(selectedUser, requestUSer).isEmpty())
//            return "none"; //팔로우 x
//
//        return "following"; //팔로잉
//    }

}
