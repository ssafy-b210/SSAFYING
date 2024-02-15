package com.ssafying.domain.market.service;

import com.ssafying.domain.feed.entity.FeedImage;
import com.ssafying.domain.market.dto.request.AddMarketRequest;
import com.ssafying.domain.market.dto.request.ModifyMarketRequest;
import com.ssafying.domain.market.dto.response.MarketDetailResponse;
import com.ssafying.domain.market.dto.response.MarketListResponse;
import com.ssafying.domain.market.entity.Market;
import com.ssafying.domain.market.entity.MarketImage;
import com.ssafying.domain.market.entity.MarketWay;
import com.ssafying.domain.market.repository.jdbc.MarketImageRepository;
import com.ssafying.domain.market.repository.jdbc.MarketRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import com.ssafying.global.result.ResultResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class MarketService {

    private final MarketRepository marketRepository;
    private final UserRepository userRepository;
    private final MarketImageRepository marketImageRepository;

    /*
     * 게시글 등록
     */
    @Transactional
    public int addMarket(final AddMarketRequest request) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("유저 정보를 찾을 수 없습니다."));

        Market market = Market.addMarket(
                request,
                user
        );

        Market savedMarket = marketRepository.save(market);

        //image upload
        List<String> imgUrls = request.getImageUrls();
        for(String url : imgUrls){
            MarketImage marketImage = MarketImage.addMarketImage(
                    market,
                    url
            );
            marketImageRepository.save(marketImage);
        }

        return savedMarket.getMarketId();
    }

    /*
     * 게시글 삭제
     */
    @Transactional
    public int removeMarket(int marketId){

        Market market = marketRepository.findById(marketId)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        marketRepository.delete(market);

        return market.getMarketId();
    }

    /*
     * 게시글 수정
     */
    @Transactional
    public int modifyMarket(int marketId, final ModifyMarketRequest request){

        Market market = marketRepository.findById(marketId)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        market = Market.modifyMarket(
                market,
                request
        );

        marketRepository.save(market);

        return market.getMarketId();
    }

    /*
     * 게시글 전체 조회
     */
    @Transactional
    public List<MarketListResponse> findAllMarkets(MarketWay marketWay) {

        List<Market> markets = null;

        //marketWay 값에 따라
        if(marketWay == null){
            markets = marketRepository.findMarket();
        }else{
            markets = marketRepository.findByMarketWay(marketWay);
        }

        List<MarketListResponse> responseList = new ArrayList<>();

        for (Market market : markets) {
            responseList.add(MarketListResponse.builder()
                    .marketId(market.getMarketId())
                    .marketWay(market.getMarketWay())
                    .nickname(market.getUser().getNickname())
                    .title(market.getTitle())
                    .content(market.getContent())
                    .price(market.getPrice())
                    .isSoldout(market.getIsSoldout())
                    .build());
        }

        return responseList;
    }

    /*
     * 게시글 상세 조회
     */
    @Transactional
    public MarketDetailResponse findMarket(int marketId){
        Market market = marketRepository.findById(marketId)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        MarketDetailResponse response = MarketDetailResponse.builder()
                .title(market.getTitle())
                .nickname(market.getUser().getNickname())
                .marketWay(market.getMarketWay())
                .isSoldout(market.getIsSoldout())
                .price(market.getPrice())
                .content(market.getContent())
                .imageUrl(market.getMarketImages())
                .userId(market.getUser().getId())
                .build();

        return response;
    }




}
