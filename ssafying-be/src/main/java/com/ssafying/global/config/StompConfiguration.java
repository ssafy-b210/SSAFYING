package com.ssafying.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class StompConfiguration implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {

        //채팅
        registry.enableSimpleBroker("/sub"); // 메시지 구독하는 요청 url => 즉 메시지를 받을 때
        registry.setApplicationDestinationPrefixes("/pub"); // 메시지 발행(전송)

        //위치공유
        registry.enableSimpleBroker("/sub/location"); // 위치정보 구독 url
        registry.setApplicationDestinationPrefixes("/pub/location"); // 위치정보 발행 url (도착경로 prefix)
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws") // websocket 커넥션 url
                .setAllowedOriginPatterns("*") // cors 허용
                .withSockJS(); // sockJS 사용
    }
}
