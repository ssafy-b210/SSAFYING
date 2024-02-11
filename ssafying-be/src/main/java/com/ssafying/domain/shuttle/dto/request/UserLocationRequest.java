package com.ssafying.domain.shuttle.dto.request;

import com.ssafying.domain.shuttle.entity.Shuttle;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class UserLocationRequest {

    String lat; //위도

    String lon; //경도

    int shuttleId; //타고 있는 셔틀버스
}
