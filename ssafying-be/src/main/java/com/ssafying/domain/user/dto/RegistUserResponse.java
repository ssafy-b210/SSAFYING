package com.ssafying.domain.user.dto;

import lombok.Data;


@Data
public class RegistUserResponse {

    private int status;

    private String code;

    private String message;

    private Object data;

    public RegistUserResponse(ResultCode resultCode, Object data) {
        this.status = resultCode.getStatus();
        this.code = resultCode.getCode();
        this.message = resultCode.getMessage();
        this.data = data;
    }

    public static RegistUserResponse of(ResultCode resultCode, Object data) {
        return new RegistUserResponse(resultCode, data);
    }

    public static RegistUserResponse of(ResultCode resultCode) {
        return new RegistUserResponse(resultCode, "");
    }

}
