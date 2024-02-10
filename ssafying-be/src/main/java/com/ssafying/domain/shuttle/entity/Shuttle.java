package com.ssafying.domain.shuttle.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "campus_id")
    private Campus campus; //해당 캠퍼스

    @OneToMany(mappedBy = "shuttle")
    private List<BusStop> busStops = new ArrayList<>(); //셔틀버스가 들리는 정류장리스트

}
