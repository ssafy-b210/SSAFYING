package com.ssafying.domain.user.repository.jdbc;

import com.ssafying.domain.user.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StudentRepository extends JpaRepository<Student, Integer> {

    //들어온 name, email, number값이 맞는지 확인
    @Query("select s from Student s where s.studentName = :studentName and s.studentEmail = :studentEmail and s.studentNumber = :studentNumber")
    Student findByStudentNameAndStudentEmailAndStudentNumber(
            @Param("studentName") String studentName,
            @Param("studentEmail") String studentEmail,
            @Param("studentNumber") int StudentNumber
    );

}
