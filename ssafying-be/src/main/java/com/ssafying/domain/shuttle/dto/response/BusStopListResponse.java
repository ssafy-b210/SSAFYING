package com.ssafying.domain.shuttle.dto.response;

import lombok.*;

import java.time.LocalTime;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class BusStopListResponse {

    String busStopName;
    double latitude;
    double longitude;
    LocalTime arrivalAt;

}
