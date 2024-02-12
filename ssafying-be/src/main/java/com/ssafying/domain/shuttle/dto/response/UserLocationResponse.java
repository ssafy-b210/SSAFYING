package com.ssafying.domain.shuttle.dto.response;

import com.ssafying.domain.shuttle.entity.Shuttle;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class UserLocationResponse {

    double latitude; //위도

    double longitude; //경도

    int shuttleId; //위치를 알려줄 셔틀버스
}
