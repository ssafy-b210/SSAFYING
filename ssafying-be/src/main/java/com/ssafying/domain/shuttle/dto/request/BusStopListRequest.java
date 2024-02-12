package com.ssafying.domain.shuttle.dto.request;

import lombok.*;

import java.time.LocalTime;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class BusStopListRequest {

    int busStopId;
    String busStopName;
    double latitude;
    double longitude;
    LocalTime arrivalAt;

}
