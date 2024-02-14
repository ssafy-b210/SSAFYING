package com.ssafying.domain.chat.dto;

import com.ssafying.domain.chat.entity.ChatRoomUser;
import com.ssafying.domain.user.dto.SimpleUserDto;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ChatRoomUserDto {

    int id;

    String lastMessage;

    ChatRoomDto roomInfo;

    LocalDateTime createdAt;
    LocalDateTime updatedAt;

    public static ChatRoomUserDto convertToChatRoomUserDto(ChatRoomUser chatRoomUser) {
        return ChatRoomUserDto.builder()
                .id(chatRoomUser.getId())
                .lastMessage(chatRoomUser.getLastMessage())
                .createdAt(chatRoomUser.getCreatedAt())
                .updatedAt(chatRoomUser.getUpdatedAt())
                .roomInfo(ChatRoomDto.convertToChatRoomDto(chatRoomUser.getChatRoom()))
                .build();
    }

}
