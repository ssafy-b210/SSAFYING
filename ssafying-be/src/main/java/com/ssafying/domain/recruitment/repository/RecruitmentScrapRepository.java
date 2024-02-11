package com.ssafying.domain.recruitment.repository;

import com.ssafying.domain.recruitment.entity.RecruitmentScrap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecruitmentScrapRepository extends JpaRepository<RecruitmentScrap, Long> {

    Optional<RecruitmentScrap> findByRecruitmentId(int recruitmentId);

}
