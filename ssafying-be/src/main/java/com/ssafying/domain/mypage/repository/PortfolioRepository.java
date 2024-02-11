package com.ssafying.domain.mypage.repository;

import com.ssafying.domain.mypage.entity.Portfolio;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PortfolioRepository extends JpaRepository<Portfolio, Integer> {

    List<Portfolio> findByUser(User user);

}
