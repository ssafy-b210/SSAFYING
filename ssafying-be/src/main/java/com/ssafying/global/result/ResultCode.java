package com.ssafying.global.result;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ResultCode {

    REGIST_SUCCESS(200, "1.1", "회원가입에 성공하였습니다."),
    REGIST_FAIL(200, "1.1.1", "회원가입에 실패했습니다.");

    private final int status;
    private final String code;
    private final String message;
}
