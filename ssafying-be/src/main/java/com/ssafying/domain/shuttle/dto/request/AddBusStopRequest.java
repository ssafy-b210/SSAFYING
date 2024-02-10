package com.ssafying.domain.shuttle.dto.request;

import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.shuttle.entity.Shuttle;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddBusStopRequest {
    
    /*
     * 사용자가 버스정류장 어디서 탄다고 입력할 때
     */
    int userId; //사용자 id
    Campus campus; //어느 캠퍼스
    int busStopId; //어디 정류장
    Shuttle shuttle; //몇호차
    
}
