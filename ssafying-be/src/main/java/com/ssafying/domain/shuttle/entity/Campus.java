package com.ssafying.domain.shuttle.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "campus")
@Getter
//@Setter
public class Campus {

    @Id
    @GeneratedValue
    @Column(name = "campus_id")
    private int campusId; //캠퍼스 아이디

    @Column(name = "campus_region")
    @Enumerated(EnumType.STRING)
    private CampusRegion campusRegion; //캠퍼스 지역


}
