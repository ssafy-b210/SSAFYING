package com.ssafying.domain.user.dto.request;

import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.user.entity.UserStatus;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDate;

@Getter
@Builder
public class CreateUserRequest {

//    @NotBlank(message = "캠퍼스 정보 입력은 필수입니다.")
    Campus campusId;

    @NotBlank(message = "이메일 입력은 필수입니다.")
    String email;

    @NotBlank(message = "비밀번호 입력은 필수입니다.")
    String password;

    @NotBlank(message = "닉네임 입력은 필수입니다.")
    String nickname;

//    @NotBlank(message = "생년월일 입력은 필수입니다.")
    LocalDate birthday;

    @NotBlank(message = "휴대폰 번호 입력은 필수입니다.")
    String phoneNumber;

    @NotBlank(message = "이름 입력은 필수입니다.")
    String name;

//    @NotBlank(message = "기수 입력은 필수입니다.")
    int generation;

//    @NotBlank(message = "전공 유무 입력은 필수입니다.")
    boolean isMajor;

    UserStatus userStatus;

}
