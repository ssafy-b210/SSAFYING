package com.ssafying.domain.bamboo.repository.jdbc;

import com.ssafying.domain.bamboo.entity.Bamboo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BambooRepository extends JpaRepository<Bamboo, Long> {

}
