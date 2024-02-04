package com.ssafying.domain.user.service;

import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.shuttle.repository.jdbc.CampusRepository;
import com.ssafying.domain.user.dto.request.CreateUserRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import com.ssafying.global.config.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class UserAuthService {

    private final UserRepository userRepository;
    private final CampusRepository campusRepository;

    private final TokenProvider tokenProvider;

    /*
     * 회원 가입
     */
    @Transactional
    public int addUser(final CreateUserRequest request){

        //중복회원 검증
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalStateException("동일한 이메일로 등록된 회원이 존재합니다.");
        }

        if (userRepository.existsByNickname(request.getNickname())){
            throw new IllegalStateException("이미 사용 중인 닉네임입니다.");
        }

        // 유저의 지역으로 campus 받아옴
        Campus campus = campusRepository.findByCampusRegion(request.getCampusRegion())
                .orElseThrow(() -> (new RuntimeException("일치하는 지역이 없습니다.")));

        //user build
        User user = User.createUser(
                campus,
                request
        );

        User save = userRepository.save(user);

        return save.getId();
    }

    /*
     * 로그인
     */
    @Transactional
    public User login(String email, String password){

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("로그인 실패"));

        //패스워드 검증
        if(user.getPassword().equals(password)){
            return user;
        }else{
            return null;
        }

    }

    // 토큰 검증 및 사용자 정보 추출 메소드
    public User getUserFromToken(String token) {
        // 토큰 유효성 검증
        if (!tokenProvider.validToken(token)) {
            throw new RuntimeException("유효하지 않은 토큰입니다.");
        }

        // 토큰 기반으로 유저 ID 추출
        int userId = tokenProvider.getUserId(token);

        // 유저 정보 조회
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("존재하지 않는 사용자입니다."));
    }

}
