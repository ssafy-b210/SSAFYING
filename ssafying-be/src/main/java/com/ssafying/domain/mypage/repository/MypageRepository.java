package com.ssafying.domain.mypage.repository;

import com.ssafying.domain.mypage.entity.Portfolio;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MypageRepository extends JpaRepository<Portfolio, Integer> {

    List<Portfolio> findByUser(User user);

}
