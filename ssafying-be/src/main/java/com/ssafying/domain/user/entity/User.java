package com.ssafying.domain.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafying.domain.chat.entity.ChatMessage;
import com.ssafying.domain.chat.entity.ChatRoomUser;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.follow.entity.Follow;
import com.ssafying.domain.market.entity.Market;
import com.ssafying.domain.shuttle.entity.BusStop;
import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.user.dto.request.CreateUserRequest;
import com.ssafying.domain.user.dto.request.UpdateUserRequest;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.DynamicUpdate;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@DynamicUpdate
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int id; //회원 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "campus_id")
    private Campus campus; //캠퍼스

    @Column(unique = true)
    private String email; //이메일

    private String password; //비밀번호

    @Column(unique = true)
    private String nickname; //닉네임

    @Column(name = "phone_number")
    private String phoneNumber; //전화번호

    private String name; //이름

    private int generation; //기수

    @Column(name = "profile_image_url")
    private String profileImageUrl; //프로필이미지

    private String intro; //한줄 소개

    private String readme; // 리드미

    @Enumerated(EnumType.STRING)
    private UserStatus status; //회원 상태

    /* board entity */
    @Column(name = "is_major")
    private int isMajor; //전공 유무

    /* chat entity */
    @OneToMany(mappedBy = "user")
    private List<ChatMessage> chatMessages = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<ChatRoomUser> chatRoomUsers = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Crew> crews = new ArrayList<>(); //가입한 크루
    
    @OneToMany(mappedBy = "user")
    private List<Market> markets = new ArrayList<>(); //작성한 중고거래 게시글

    @OneToMany(mappedBy = "fromUser")
    private List<Follow> followings = new ArrayList<>(); //팔로잉 리스트

    @OneToMany(mappedBy = "toUser")
    private List<Follow> followers= new ArrayList<>(); //팔로워 리스트

    /*
     * 회원 가입
     */
    public static User createUser(

            Campus campus,
            CreateUserRequest request
    ){

        User user = new User();

        user.campus = campus;
        user.email = request.getEmail();
        user.password = request.getPassword();
        user.nickname = request.getNickname();
        user.phoneNumber = request.getPhoneNumber();
        user.name = request.getName();
        user.generation = request.getGeneration();
        user.isMajor = request.getIsMajor();
        user.status = UserStatus.ACTIVE;

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
            user.nickname = request.getNickname();
        }
        if(request.getPhoneNumber() != null){
            user.phoneNumber = request.getPhoneNumber();
        }
        if(request.getPassword() != null){
            user.password = request.getPassword();
        }
        if(request.getIntro() != null){
            user.intro = request.getIntro();
        }
        if(request.getProfileImageUrl() != null){
            user.profileImageUrl = request.getProfileImageUrl();
        }
        return user;
    }

    public static User updateReadMe(
            User user,
            String readme
    ) {
        if(readme != null) {
            user.readme = readme;
        }
        return user;
    }

}
