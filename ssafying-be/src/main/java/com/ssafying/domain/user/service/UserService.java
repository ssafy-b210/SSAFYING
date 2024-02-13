package com.ssafying.domain.user.service;

import com.ssafying.domain.feed.repository.HashtagRepository;
import com.ssafying.domain.user.dto.SimpleUserDto;
import com.ssafying.domain.user.dto.request.AddInterestTagRequest;
import com.ssafying.domain.user.dto.request.UpdateUserRequest;
import com.ssafying.domain.user.dto.response.AddInterestTagResponse;
import com.ssafying.domain.user.dto.response.UserDetailResponse;
import com.ssafying.domain.user.entity.InterestTag;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.InterestTagRepository;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import com.ssafying.global.entity.Hashtag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static com.ssafying.global.entity.Hashtag.createTag;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final InterestTagRepository interestTagRepository;
    private final HashtagRepository hashtagRepository;


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
                .profileImageUrl(user.getProfileImageUrl())
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

    /**
     * 관심 태그 저장
     */
    @Transactional
    public List<String> addInterestTag(AddInterestTagRequest request){

        int userSize = userRepository.findAll().size();

        User user = userRepository.findById(userSize)
                .orElseThrow(() -> new RuntimeException("회원 정보를 찾을 수 없습니다."));

        //tag 찾아오고 만약 해당 태그가 없다면 저장하기
        List<String> tags = request.getHashtags();

        for(String tag : tags){
            getOrCreateHashtag(user, tag);

            AddInterestTagResponse response = AddInterestTagResponse.builder()
                    .userId(user.getId())
                    .tagName(tag)
                    .build();
        }

        return tags;

    }

    /**
     * 닉네임으로 검색
     */
    public List<SimpleUserDto> searchByNickname(String nickname){

        List<User> user = userRepository.findByNickname("%" + nickname + "%");

        List<SimpleUserDto> list = new ArrayList<>();

        for(User u : user){
            list.add(SimpleUserDto.builder()
                    .id(u.getId())
                    .nickname(u.getNickname())
                    .profileImageUrl(u.getProfileImageUrl())
                    .build());
        }

        return list;

    }

    public void getOrCreateHashtag(User user, String tag){
        Hashtag hashtag = hashtagRepository.findByTagName(tag)
                .orElseGet(() -> createAndSaveTag(tag));

        InterestTag interestTag = InterestTag.addInterestTag(
                user,
                hashtag
        );
        interestTagRepository.save(interestTag);
    }

    private Hashtag createAndSaveTag(String tag) {
        Hashtag newTag = createTag(tag);
        hashtagRepository.save(newTag);
        return newTag;
    }


}
