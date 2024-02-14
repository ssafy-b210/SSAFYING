    package com.ssafying.domain.chat.dto;
    import lombok.Getter;

    @Getter
    public class ChattingRequest {
        private Integer userId; // 유저 id
        private String message; // 채팅메시지
    }
