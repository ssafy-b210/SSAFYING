package com.ssafying.domain.chat.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ChatRoomExitRequest {

    @NotNull(message = "유저아이디필수")
    int userId;

    @NotNull(message = "방아이디필수")
    int chatRoomId;

}
