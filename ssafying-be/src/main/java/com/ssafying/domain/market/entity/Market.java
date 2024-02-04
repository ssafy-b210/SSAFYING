package com.ssafying.domain.market.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafying.domain.market.dto.request.AddMarketRequest;
import com.ssafying.domain.market.dto.request.MarketWay;
import com.ssafying.domain.market.dto.request.ModifyMarketRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "market")
@Getter
public class Market extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "market_id")
    private int marketId; //중고거래 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user; //작성자

    @Enumerated(EnumType.STRING)
    private MarketWay marketWay; //거래 방식

    private int price; //금액

    private String title; //제목

    private String content; //내용

    @Column(name = "is_soldout")
    private Boolean isSoldout; //거래 완료 여부

    @OneToMany(mappedBy = "market", cascade = CascadeType.REMOVE)
    private List<MarketImage> marketImages = new ArrayList<>(); //사진

    /*
     * 중고거래 게시글 작성
     */
    public static Market addMarket(
            AddMarketRequest request,
            User user
    ){

        Market market = new Market();

        market.marketWay = request.getMarketWay();
        market.isSoldout = request.getIsSoldout();
        market.price = request.getPrice();
        market.title = request.getTitle();
        market.content = request.getContent();
        market.user = user;

        return market;
    }

    /*
     * 게시글 수정
     */
    public static Market modifyMarket(
            Market market,
            ModifyMarketRequest request
    ){

        // null 값이 아닌 경우에만 업데이트
        if(request.getTitle() != null){
            market.title = request.getTitle();
        }
        if(request.getContent() != null){
            market.content = request.getContent();
        }
        if(request.getPrice() != 0){
            market.price = request.getPrice();
        }

        // 드롭다운
        market.marketWay = request.getMarketWay();
        market.isSoldout = request.getIsSoldout();

        return market;

    }



}
