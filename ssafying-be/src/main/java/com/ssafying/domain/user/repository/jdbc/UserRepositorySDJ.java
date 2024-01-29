package com.ssafying.domain.user.repository.jdbc;

import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositorySDJ extends JpaRepository<User, Integer> {
}
