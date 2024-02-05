package com.ssafying.domain.follow.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafying.domain.follow.dto.AddFollowRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "follow")
@Getter
public class Follow extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "follow_id")
    private int followId; //팔로우 아이디

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "from_user")
    private User fromUser; //팔로우 거는 follower

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "to_user")
    private User toUser; //팔로우 받는 followee

    //수정일자는 필요 없지만 일단 BaseTimeEntity 상속

    /**
     * 팔로우 요청
     */
    public static Follow addFollow(
            User fromUser,
            User toUser
    ){
        Follow follow = new Follow();

        follow.fromUser = fromUser;
        follow.toUser = toUser;

        return follow;
    }
}
