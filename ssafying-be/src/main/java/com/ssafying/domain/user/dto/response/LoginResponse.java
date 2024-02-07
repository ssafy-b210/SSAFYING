package com.ssafying.domain.user.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.user.dto.CampusDto;
import com.ssafying.domain.user.entity.UserStatus;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class LoginResponse {

    private int id; //회원 id

    private CampusDto campus; //캠퍼스

    private String email; //이메일

    private String password; //비밀번호

    private String nickname; //닉네임

    private String phoneNumber; //전화번호

    private String name; //이름

    private int generation; //기수

    private String profileImageUrl; //프로필이미지

    private String intro; //한줄 소개

    private UserStatus status; //회원 상태

    private Boolean isMajor; //전공 유무


}
