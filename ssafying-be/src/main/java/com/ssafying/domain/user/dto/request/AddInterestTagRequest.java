package com.ssafying.domain.user.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddInterestTagRequest {

    int userId;
    String tagName;

}
