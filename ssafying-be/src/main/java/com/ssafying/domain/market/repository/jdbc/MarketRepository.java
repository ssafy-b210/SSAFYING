package com.ssafying.domain.market.repository.jdbc;

import com.ssafying.domain.market.entity.Market;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarketRepository extends JpaRepository<Market, Integer> {
}
