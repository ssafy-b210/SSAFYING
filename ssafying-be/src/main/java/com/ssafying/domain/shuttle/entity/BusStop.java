package com.ssafying.domain.shuttle.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafying.domain.shuttle.dto.request.AddBusStopRequest;
import com.ssafying.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "bus_stop")
@Getter
public class BusStop {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bus_stop_id")
    private int busStopId; //정류장 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Shuttle shuttle; //해당 셔틀버스

    private double lat; //위도

    private double lon; //경도

    @OneToMany(mappedBy = "busStop")
    private List<User> user = new ArrayList<>(); //해당 정류장 이용하는 교육생



}
