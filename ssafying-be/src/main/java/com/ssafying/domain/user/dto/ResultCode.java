package com.ssafying.domain.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ResultCode {

    // User
    REGISTER_SUCCESS(200, "1.1", "회원가입에 성공하였습니다."),
    REGISTER_FAIL(200, "1.1.1", "회원가입에 실패하였습니다.");

    private final int status;
    private final String code;
    private final String message;

}
