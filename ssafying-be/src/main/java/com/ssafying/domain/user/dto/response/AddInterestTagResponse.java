package com.ssafying.domain.user.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddInterestTagResponse {

    int userId;
    String tagName;

}
