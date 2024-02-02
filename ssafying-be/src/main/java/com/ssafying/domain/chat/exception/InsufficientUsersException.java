package com.ssafying.domain.chat.exception;

public class InsufficientUsersException extends IllegalArgumentException {

    public InsufficientUsersException() {
        super("채팅방 생성에 필요한 유저는 최소 2명 이상입니다");
    }
}
