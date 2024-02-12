package com.ssafying.domain.mypage.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class FindReadmeResponse {

    String readme;

}
