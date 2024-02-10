package com.ssafying.domain.shuttle.dto.response;

import com.ssafying.domain.shuttle.entity.Shuttle;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class UserLocationResponse {

    String lat; //위도

    String lon; //경도

    int shuttleId; //위치를 알려줄 셔틀버스
}
