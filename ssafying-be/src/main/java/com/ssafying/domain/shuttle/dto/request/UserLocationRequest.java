package com.ssafying.domain.shuttle.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class UserLocationRequest {

    @NotNull
    long latitude; //위도

    @NotNull
    long longitude; //경도

    @NotNull
    int shuttleId; //타고 있는 셔틀버스
}
