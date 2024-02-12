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

    int id; //회원 id

    CampusDto campus; //캠퍼스

    String email; //이메일

    String password; //비밀번호

    String nickname; //닉네임

    String phoneNumber; //전화번호

    String name; //이름

    int generation; //기수

    String profileImageUrl; //프로필이미지

    String intro; //한줄 소개

    UserStatus status; //회원 상태

    int isMajor; //전공 유무


}
