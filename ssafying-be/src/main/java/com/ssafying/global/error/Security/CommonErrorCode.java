package com.ssafying.global.error.Security;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum CommonErrorCode implements ErrorCode{

    SERVICE_ERROR(HttpStatus.INTERNAL_SERVER_ERROR.value(), "요청하신 서비스에 문제가 있습니다."),
    FORBIDDEN(HttpStatus.INTERNAL_SERVER_ERROR.value(), "요청하신 서비스에 문제가 있습니다."),
    UNAUTHORIZED(HttpStatus.INTERNAL_SERVER_ERROR.value(), "요청하신 서비스에 문제가 있습니다.");

    private final int resultCode;
    private final String resultMsg;

    CommonErrorCode(int rc, String rm){
        resultCode = rc;
        resultMsg = rm;
    }
}
