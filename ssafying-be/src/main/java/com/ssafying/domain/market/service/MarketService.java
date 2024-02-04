package com.ssafying.domain.market.service;

import com.ssafying.domain.feed.entity.FeedImage;
import com.ssafying.domain.market.dto.request.AddMarketRequest;
import com.ssafying.domain.market.dto.request.ModifyMarketRequest;
import com.ssafying.domain.market.entity.Market;
import com.ssafying.domain.market.entity.MarketImage;
import com.ssafying.domain.market.repository.jdbc.MarketImageRepository;
import com.ssafying.domain.market.repository.jdbc.MarketRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public Market addMarket(final AddMarketRequest request) {

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
        List<String> imageUrls = market.getMarketImages().stream()
                .map(MarketImage::getImageUrl)
                .toList();
        System.out.println("////////////////////////////////");
        System.out.println(imageUrls.toString());
        System.out.println("////////////////////////////////");

        return savedMarket;
    }

    /*
     * 게시글 삭제
     */
    @Transactional
    public Market removeMarket(int marketId){

        Market market = marketRepository.findById(marketId)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        marketRepository.delete(market);

        return market;
    }

    /*
     * 게시글 수정
     */
    @Transactional
    public Market modifyMarket(int marketId, final ModifyMarketRequest request){

        Market market = marketRepository.findById(marketId)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        market = Market.modifyMarket(
                market,
                request
        );

        marketRepository.save(market);

        return market;
    }

    /*
     * 게시글 전체 조회
     */
    @Transactional
    public List<Market> findAllMarkets(){
        List<Market> list = marketRepository.findAll();

        return list;
    }

    /*
     * 게시글 상세 조회
     */
    @Transactional
    public Market findMarket(int marketId){
        Market market = marketRepository.findById(marketId)
                .orElseThrow(() -> new RuntimeException("게시글이 존재하지 않습니다."));

        return market;
    }




}
