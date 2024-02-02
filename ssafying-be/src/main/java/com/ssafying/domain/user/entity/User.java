package com.ssafying.domain.user.entity;

import com.ssafying.domain.chat.entity.ChatMessage;
import com.ssafying.domain.chat.entity.ChatRoomUser;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.user.dto.request.UpdateUserRequest;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@DynamicUpdate
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int id; //회원 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "campus_id")
    private Campus campus; //캠퍼스

    @Column(unique = true)
    private String email; //이메일

    private String password; //비밀번호

    @Column(unique = true)
    private String nickname; //닉네임

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthday; //생년월일

    @Column(name = "phone_number")
    private String phoneNumber; //전화번호

    private String name; //이름

    private int generation; //기수

    @Column(name = "profile_image_url")
    private String profileImageUrl; //프로필이미지

    private String intro; //한줄 소개

    @Enumerated(EnumType.STRING)
    private UserStatus status; //회원 상태

    /* board entity */
    @Column(name = "is_major")
    private boolean isMajor; //전공 유무

    /* chat entity */
    @OneToMany(mappedBy = "user")
    private List<ChatMessage> chatMessages = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<ChatRoomUser> chatRoomUsers = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Crew> crews = new ArrayList<>(); //가입한 크루

    /*
     * 회원 가입
     */
    public static User createUser(

            Campus campus,
            String email,
            String password,
            String nickname,
            LocalDate birthday,
            String phoneNumber,
            String name,
            int generation,
            boolean isMajor
    ){

        User user = new User();

        user.campus = campus;
        user.email = email;
        user.password = password;
        user.nickname = nickname;
        user.birthday = birthday;
        user.phoneNumber = phoneNumber;
        user.name = name;
        user.generation = generation;
        user.isMajor = isMajor;
        user.status = UserStatus.ACTIVE;

        return user;
    }

    /*
     * 회원 정보 조회
     */
    public static User detailUser(

            String email,
            String nickname,
            String phoneNumber,
            String name,
            String intro,
            String profileImageUrl
    ) {

        User user = new User();

        user.email = email;
        user.nickname = nickname;
        user.phoneNumber = phoneNumber;
        user.name = name;
        user.intro = intro;
        user.profileImageUrl = profileImageUrl;

        return user;

    }

    /*
     * 회원 정보 수정
     */
    public static User updateUser(

            User user,
            UpdateUserRequest request
    ){

        // null 값이 아닌 경우에만 업데이트
        if(request.getNickname() != null){
            user.setNickname(request.getNickname());
        }
        if(request.getPhoneNumber() != null){
            user.setPhoneNumber(request.getPhoneNumber());
        }
        if(request.getPassword() != null){
            user.setPassword(request.getPassword());
        }
        if(request.getIntro() != null){
            user.setIntro(request.getIntro());
        }
        if(request.getProfileImageUrl() != null){
            user.setProfileImageUrl(request.getProfileImageUrl());
        }
        return user;
    }

}
