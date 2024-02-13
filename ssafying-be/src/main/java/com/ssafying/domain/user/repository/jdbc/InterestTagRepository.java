package com.ssafying.domain.user.repository.jdbc;

import com.ssafying.domain.user.entity.InterestTag;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InterestTagRepository extends JpaRepository<InterestTag, Integer> {

    List<InterestTag> findByUser(User user);

}
