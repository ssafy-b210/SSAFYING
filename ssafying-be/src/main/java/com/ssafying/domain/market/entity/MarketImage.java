package com.ssafying.domain.market.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "market_image")
@Getter
public class MarketImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "market_image_id")
    private int imageId; // 거래글 이미지 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "market_id")
    private Market market; // 거래글

    @Column(name = "image_url")
    private String imageUrl; // 이미지url

    /*
     * 이미지 추가
     */
    public static MarketImage addMarketImage(
            Market market,
            String imageUrl
    ){

        MarketImage marketImage = new MarketImage();

        marketImage.market = market;
        marketImage.imageUrl = imageUrl;

        return marketImage;

    }

}
