package com.ssafying.global.result;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor
@Builder
public class ResultResponse<T> {
    private HttpStatus statusCode;
    private String resultMsg;
    private T resultData;

    public ResultResponse(final HttpStatus statusCode, final String resultMsg) {
        this.statusCode = statusCode;
        this.resultMsg = resultMsg;
        this.resultData = null;
    }

    public static <T> ResultResponse<T> res(final HttpStatus statusCode, final String resultMsg) {
        return res(statusCode, resultMsg, null);
    }

    public static <T> ResultResponse<T> res(final HttpStatus statusCode, final String resultMsg, final T t) {
        return ResultResponse.<T>builder()
                .resultData(t)
                .statusCode(statusCode)
                .resultMsg(resultMsg)
                .build();
    }
}
