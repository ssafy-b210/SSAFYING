package com.ssafying.domain.market.controller;

import com.ssafying.domain.market.dto.request.AddMarketRequest;
import com.ssafying.domain.market.dto.request.ModifyMarketRequest;
import com.ssafying.domain.market.entity.Market;
import com.ssafying.domain.market.service.MarketService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/market")
@Tag(name = "중고거래 게시판")
public class MarketController {

    private final MarketService marketService;

    /*
     * 11.1 게시글 작성
     */
    @PostMapping
    @Operation(summary = "거래글 작성")
    public int marketAdd(@RequestBody @Valid AddMarketRequest request){

        Market market = marketService.addMarket(request);

        return market.getMarketId();
    }

    /*
     * 11.2 게시글 삭제
     */
    @DeleteMapping("/{marketId}")
    @Operation(summary = "거래글 삭제")
    public int crewRemove(@PathVariable(name = "marketId") int marketId){

        marketService.removeMarket(marketId);

        return marketId;

    }

    /*
     * 11.3 게시글 수정
     */
    @PatchMapping("/{marketId}")
    @Operation(summary = "거래글 수정")
    public int marketModify(@PathVariable(name = "marketId") int marketId,
                            @RequestBody final ModifyMarketRequest request){

        marketService.modifyMarket(marketId, request);

        return marketId;
    }

    /*
     * 11.4 게시글 전체 조회
     */
    @GetMapping
    @Operation(summary = "거래글 전체 조회")
    public List<Market> marketList(){

        List<Market> list = marketService.findAllMarkets();

        return list;
    }

    /*
     * 11.5 게시글 상세 조회
     */
    @GetMapping("/{marketId}")
    @Operation(summary = "거래글 상세 조회")
    public int crewDetails(@PathVariable(name = "marketId") int marketId){

        Market market = marketService.findMarket(marketId);

        return marketId;
    }

}
