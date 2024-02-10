package com.ssafying.domain.user.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LoginRequest {

    @NotNull(message = "이메일을 입력해주세요.")
    String email;

    @NotNull(message = "비밀번호를 입력해주세요.")
    String password;

}
