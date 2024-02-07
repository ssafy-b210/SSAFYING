package com.ssafying.domain.mypage.entity;

import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "portfolio")
@Getter
public class Portfolio extends BaseTimeEntity {

    @Id
    @GeneratedValue
    @Column(name = "portfolio_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // 유저

    private String url; // 포트폴리오 url

    @Enumerated(EnumType.STRING)
    private PortfolioType type; // url 타입 (GITHUB, NOTION ...)

    public static Portfolio createPortfolio(
            User user,
            String url,
            PortfolioType type
    ) {
        Portfolio portfolio = new Portfolio();
        portfolio.user = user;
        portfolio.url = url;
        portfolio.type = type;
        return portfolio;
    }

    public static Portfolio modifyPortfolio(
            String url,
            PortfolioType type
    ) {
        Portfolio portfolio = new Portfolio();
        if(url != null){
            portfolio.url = url;
        }
        if(type != null){
            portfolio.type = type;
        }
        return portfolio;
    }

}
