package com.ssafying.domain.chat.dto;

import com.ssafying.domain.chat.entity.ChatRoom;
import com.ssafying.domain.chat.entity.ChatRoomUser;
import com.ssafying.domain.chat.entity.RoomType;
import com.ssafying.domain.user.dto.SimpleUserDto;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class ChatRoomDto {

    // 채팅방 id
    int id;

    // 룸 타입 - PERSONAL, GROUP
    RoomType type;

    // 참여 유저 정보
    List<SimpleUserDto> joinUserInfo;

    LocalDateTime createdAt;
    LocalDateTime updatedAt;

    // Static method to convert ChatRoom entity to ChatRoomDto
    public static ChatRoomDto convertToChatRoomDto(ChatRoom chatRoom) {
        return ChatRoomDto.builder()
                .id(chatRoom.getId())
                .type(chatRoom.getType())
                .joinUserInfo(chatRoom.getChatRoomUserList().stream()
                        .map(chatRoomUser -> SimpleUserDto.convertToSimpleUserDto(chatRoomUser.getUser()))
                        .collect(Collectors.toList()))
                .createdAt(chatRoom.getCreatedAt())
                .updatedAt(chatRoom.getUpdatedAt())
                .build();
    }


}
