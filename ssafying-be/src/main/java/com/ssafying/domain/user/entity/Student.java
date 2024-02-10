package com.ssafying.domain.user.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "student")
@Getter
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private int studentId; //id

    @Column(name = "student_name")
    private String studentName; //이름

    @Column(name = "student_email")
    private String studentEmail; //이메일

    @Column(name = "student_number")
    private int studentNumber; //학번

}
