package com.ssafying.domain.user.dto.request;

import com.ssafying.domain.shuttle.entity.CampusRegion;
import com.ssafying.domain.user.entity.UserStatus;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CreateUserRequest {

    @NotNull(message = "캠퍼스 정보 입력은 필수입니다.")
    CampusRegion campusRegion;

    int userId;

    @NotNull(message = "이메일 입력은 필수입니다.")
    String email;

    @NotNull(message = "비밀번호 입력은 필수입니다.")
    String password;

    @NotNull(message = "닉네임 입력은 필수입니다.")
    String nickname;

    @NotNull(message = "생년월일 입력은 필수입니다.")
    LocalDate birthday;

    @NotNull(message = "휴대폰 번호 입력은 필수입니다.")
    String phoneNumber;

    @NotNull(message = "이름 입력은 필수입니다.")
    String name;

    @NotNull(message = "기수 입력은 필수입니다.")
    int generation;

    @NotNull(message = "전공 유무 입력은 필수입니다.")
    boolean isMajor;

    UserStatus userStatus;

}
