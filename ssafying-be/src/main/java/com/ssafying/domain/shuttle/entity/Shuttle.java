package com.ssafying.domain.shuttle.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "shuttle")
@Getter
public class Shuttle {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shuttle_id")
    private int shuttleId; //셔틀버스 id

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "campus_id")
//    private Campus campus; //캠퍼스

    @Column(name = "shuttle_no")
    private int shuttleNo; //셔틀 호차

//    @OneToMany(mappedBy = "shuttle")
//    private List<BusStop> busStops = new ArrayList<>(); //정류장

}
