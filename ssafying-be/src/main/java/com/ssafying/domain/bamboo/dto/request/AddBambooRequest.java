package com.ssafying.domain.bamboo.dto.request;

import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class AddBambooRequest {

    int userId;

    String content;
}
