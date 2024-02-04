package com.ssafying.domain.shuttle.entity;

import com.ssafying.domain.shuttle.dto.request.AddBusStopRequest;
import com.ssafying.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.List;

@Entity
@Table(name = "bus_stop")
@Getter
public class BusStop {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bus_stop_id")
    private int busStopId; //정류장 id

    private double lat; //위도

    private double lon; //경도

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shuttle_id")
    private Shuttle shuttle; //셔틀

    /*
     * 버스 정류장 등록
     */
//    public static BusStop addBusStop(
//
//    ){
//
//    }


}
