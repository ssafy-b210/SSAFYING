package com.ssafying.domain.shuttle.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "campus")
@Getter
public class Campus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "campus_id")
    private int campusId; //캠퍼스 아이디

    @Column(name = "campus_region")
    @Enumerated(EnumType.STRING)
    private CampusRegion campusRegion; //캠퍼스 지역

//    @OneToMany(mappedBy = "campus")
//    private List<Shuttle> shuttles = new ArrayList<>(); //셔틀버스

}
