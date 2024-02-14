package com.ssafying.domain.recruitment.repository;

import com.ssafying.domain.recruitment.entity.RecruitmentScrap;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecruitmentScrapRepository extends JpaRepository<RecruitmentScrap, Long> {

    List<RecruitmentScrap> findByUserOrderByCreatedAtDesc(User user);
    Optional<RecruitmentScrap> findByRecruitmentId(int recruitmentId);

    Optional<RecruitmentScrap> findByUserAndRecruitmentId(User user, Integer recruitmentId);

}
