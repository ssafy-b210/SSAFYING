package com.ssafying.domain.user.dto.request;

import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddInterestTagRequest {

    int userId;
//    String tagName;
    List<String> hashtags;

}
