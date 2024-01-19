package com.ssafying.domain.user.entity;

import com.ssafying.domain.board.entity.Board;
import com.ssafying.domain.chat.entity.ChatMessage;
import com.ssafying.domain.chat.entity.ChatRoomUser;
import com.ssafying.domain.shuttle.entity.Campus;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "user")
@Getter
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private int id; //회원 id

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Column(name = "campus_id")
    private Campus campusId; //캠퍼스 id

    private String email; //이메일

    private String password; //비밀번호

    private String nickname; //닉네임

    private LocalDateTime birthday; //생년월일

    @Column(name = "phone_number")
    private String phoneNumber; //전화번호

    private String name; //이름

    private int generation; //기수

    @Column(name = "profile_image_url")
    private String profileImageUrl; //프로필이미지

    private String intro; //한줄 소개

    @Column(name = "create_at")
    private LocalDateTime createdAt; //생성 시기

    @Column(name = "updated_at")
    private LocalDateTime updatedAt; //수정 시기

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
}
