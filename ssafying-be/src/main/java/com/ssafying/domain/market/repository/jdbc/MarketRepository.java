package com.ssafying.domain.market.repository.jdbc;

import com.ssafying.domain.market.entity.Market;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MarketRepository extends JpaRepository<Market, Integer> {

    //거래 여부에 따른 필터링
    @Query("select m from Market m where m.isSoldout = :isSoldout")
    List<Market> findByIsSoldout(@Param("isSoldout") Boolean isSoldout);

}
