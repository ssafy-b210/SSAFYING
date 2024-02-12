package com.ssafying.domain.shuttle.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafying.domain.shuttle.dto.request.AddBusStopRequest;
import com.ssafying.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "bus_stop")
@Getter
public class BusStop {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bus_stop_id")
    private int busStopId; //정류장 id

    @Column(name = "bus_stop_name")
    private String busStopName; //정류장 이름

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "shuttle_id")
    private Shuttle shuttle; //해당 셔틀버스

    private double latitude; //위도

    private double longitude; //경도

    @Column(name = "arrival_at")
    private LocalTime arrivalAt; //셔틀 도착 시간

}
