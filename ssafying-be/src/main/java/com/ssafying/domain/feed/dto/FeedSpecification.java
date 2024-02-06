package com.ssafying.domain.feed.dto;

import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.feed.entity.FeedHashtag;
import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.Hashtag;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class FeedSpecification {

    public static Specification<Feed> containingHashtagOrNickname(String hashtag, String nickname) {
        return (root, query, builder) -> {
            List<Predicate> predicates = new ArrayList<>();

            // Join을 통해 FeedHashtag과 조인
            Join<Feed, FeedHashtag> feedHashtagJoin = root.join("feedTags");
            Join<Feed, User> userJoin = root.join("user");

            // 해시태그 포함 검색 조건 추가
            if (hashtag != null && !hashtag.isEmpty()) {
                Join<FeedHashtag, Hashtag> hashtagJoin = feedHashtagJoin.join("hashtag");
                predicates.add(builder.like(hashtagJoin.get("tagName"), "%" + hashtag + "%"));
            }

            // 유저 닉네임 포함 검색 조건 추가
            if (nickname != null && !nickname.isEmpty()) {
                predicates.add(builder.like(userJoin.get("nickname"), "%" + nickname + "%"));
            }

            return builder.or(predicates.toArray(new Predicate[0]));
        };
    }
}