package com.ssafying.domain.user.dto;

import com.ssafying.domain.user.entity.User;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SimpleUserDto {

    Integer id;
    String nickname;
    String profileImageUrl;

    // Static method to convert User entity to SimpleUserDto
    public static SimpleUserDto convertToSimpleUserDto(User user) {
        return SimpleUserDto.builder()
                .id(user.getId())
                .nickname(user.getNickname())
                .profileImageUrl(user.getProfileImageUrl())
                .build();
    }

}
