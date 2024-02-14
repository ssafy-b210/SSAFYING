package com.ssafying.domain.chat.dto;

import com.ssafying.domain.user.dto.SimpleUserDto;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ChatMessageDto {

    int id; // 채팅id

    int chatRoomId; // 채팅방 id
    SimpleUserDto userInfo; // 유저 정보
    private String message; // 채팅메시지

    LocalDateTime createdAt;
    LocalDateTime updatedAt;
}
