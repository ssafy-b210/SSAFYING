package com.ssafying.domain.follow.service;

import com.ssafying.domain.follow.dto.request.AddFollowRequest;
import com.ssafying.domain.follow.dto.request.FindByNicknameRequest;
import com.ssafying.domain.follow.dto.request.UnFollowRequest;
import com.ssafying.domain.follow.dto.response.FindFollowerListResponse;
import com.ssafying.domain.follow.dto.response.FindFollowingListResponse;
import com.ssafying.domain.follow.dto.response.FindRecommendResponse;
import com.ssafying.domain.follow.dto.response.FollowResponse;
import com.ssafying.domain.follow.entity.Follow;
import com.ssafying.domain.follow.repository.jdbc.FollowRepository;
import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
     * 2.3.1 팔로잉 리스트 검색
     */
    public List<FindFollowingListResponse> searchFollowingByNickname(int userId, String nickname){


        User selectedUser = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("조회하려는 회원 정보를 찾을 수 없습니다."));

        List<Follow> followList = followRepository.findByToUserAndNickname(selectedUser, "%" + nickname + "%");

        List<FindFollowingListResponse> responseList = new ArrayList<>();

        for(Follow follow : followList){
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
     * 2.3.2 팔로워 리스트 검색
     */
    public List<FindFollowerListResponse> searchFollowerByNickname(int userId, String nickname){

        User selectedUser = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("조회하려는 회원 정보를 찾을 수 없습니다."));

        List<Follow> followList = followRepository.findByFromUserAndNickname(selectedUser, "%" + nickname + "%");

        List<FindFollowerListResponse> responseList = new ArrayList<>();

        for(Follow follow : followList){
            User fromUser = follow.getFromUser();  // 팔로워 정보 가져오기
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
     * 2.4 팔로우
     */
    @Transactional
    public int follow(AddFollowRequest request){

        User fromUser = userRepository.findById(request.getFromUserId())
                .orElseThrow(() -> new RuntimeException("회원을 찾을 수 없습니다."));

        User toUser = userRepository.findById(request.getToUserId())
                .orElseThrow(() -> new RuntimeException("팔로우 하려는 회원을 찾을 수 없습니다."));

        //자기 자신 팔로우 시 에러 (에러코드 : 400)
        if(fromUser == toUser){
            return -1;
        }

        //중복 팔로우 x (에러코드 : 401)
        if(followRepository.findFollow(fromUser, toUser).isPresent()){
            return -2;
        }

        Follow follow = Follow.addFollow(fromUser, toUser);

        followRepository.save(follow);

        return toUser.getId();
    }

    /**
     * 2.5 언팔로우
     * 팔로우 관계를 끊는다 -> 팔로우 하는 사람이 팔로우 받는 사람 연결을 끊는다
     */
    @Transactional
    public int unFollow(UnFollowRequest request){

        User fromUser = userRepository.findById(request.getFromUserId())
                .orElseThrow(() -> new RuntimeException("회원 정보를 찾을 수 없습니다."));

        User toUser = userRepository.findById(request.getToUserId())
                .orElseThrow(() -> new RuntimeException("팔로우 취소하려는 유저를 찾을 수 없습니다."));

        followRepository.deleteFollowByFromUser(fromUser, toUser);

        return toUser.getId();
    }


    /**
     * 2.6 추천친구
     */
    @Transactional
    public List<FindRecommendResponse> findRecommendedFriends(int userId) {

        // 사용자 정보
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("사용자 정보를 찾을 수 없습니다."));

        // 사용자의 campus, isMajor, generation 가져오기
        Campus campus = user.getCampus();
        int isMajor = user.getIsMajor();
        int generation = user.getGeneration();

        // 같은 값을 가진 사용자라면 리스트에 담는다.
        /*
         * 1. 모든 조건 필터링
         * 2. campus , generation 필터링
         * 3. campus, isMajor 필터링
         * 4. generation, isMajor 필터링
         */
        List<User> list = userRepository.findByCampusAndGenerationAndIsMajor(campus, generation, isMajor);
        List<User> listByCG = userRepository.findByCampusAndGeneration(campus, generation);
        List<User> listByCM = userRepository.findByCampusAndIsMajor(campus, isMajor);
        List<User> listByGM = userRepository.findByGenerationAndIsMajor(generation, isMajor);

        /*
         * 나 자신 제외
         */
        list.removeIf(findedMe -> findedMe.getId() == user.getId());
        listByCG.removeIf(findedMe -> findedMe.getId() == user.getId());
        listByCM.removeIf(findedMe -> findedMe.getId() == user.getId());
        listByGM.removeIf(findedMe -> findedMe.getId() == user.getId());

        /*
         * 내 팔로잉 목록에 있으면 제외
         */
        List<Follow> followingList = followRepository.findByFromUser(user);
        for(Follow finded : followingList) {

            if(finded.getFromUser().getId() == user.getId()){
                list.remove(finded.getToUser());
                listByCG.remove(finded.getToUser());
                listByCM.remove(finded.getToUser());
                listByGM.remove(finded.getToUser());
            }

        }

        // 모든 필터링 걸친 리스트 합치기
        list.addAll(listByCG);
        list.addAll(listByCM);
        list.addAll(listByGM);

        //중복 제거
        List<User> result = list.stream().distinct().toList();

        List<FindRecommendResponse> resultList = new ArrayList<>();

        for(User resultUsers : result){

            resultList.add(
                    FindRecommendResponse.builder()
                            .nickname(resultUsers.getNickname())
                            .profileImageUrl(resultUsers.getProfileImageUrl())
                            .build()
            );

        }

        return resultList;
    }

    /**
     * 2.7 팔로잉 관계 확인
     */
    public int checkFollowUser(int userId, int selectedUserId){

        // 나
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("존재하지 않는 회원입니다."));

        // 확인하려는 상대
        User selectedUser = userRepository.findById(selectedUserId)
                .orElseThrow(() -> new RuntimeException("확인하려는 유저를 찾을 수 없습니다."));

        // 내 팔로잉 목록에 selectedUser 있는지 확인
        List<Follow> isFollow = followRepository.findByToUser(selectedUser);

        if(isFollow.isEmpty()){
            return 0; //팔로우 X
        }else{
            return 1; //팔로잉
        }
    }
}
