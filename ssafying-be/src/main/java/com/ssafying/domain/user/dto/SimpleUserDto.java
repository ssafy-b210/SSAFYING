package com.ssafying.domain.user.dto;

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

}
