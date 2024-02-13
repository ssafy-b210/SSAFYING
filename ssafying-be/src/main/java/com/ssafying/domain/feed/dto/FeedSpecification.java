package com.ssafying.domain.feed.dto;

import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.feed.entity.FeedHashtag;
import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class FeedSpecification {

    public static Specification<Feed> matchingHashtag(List<String> hashtags) {
        return (root, query, builder) -> {
            List<Predicate> predicates = new ArrayList<>();

            // Join을 통해 FeedHashtag과 조인
            Join<Feed, FeedHashtag> feedHashtagJoin = root.join("feedTags");
//            Join<Feed, User> userJoin = root.join("user");

            // 해시태그 포함 검색 조건 추가
            if (hashtags != null && !hashtags.isEmpty()) {
                Expression<String> hashtagsConcatenated = feedHashtagJoin.get("hashtag").get("tagName");
                for (String hashtag : hashtags) {
                    predicates.add(builder.equal(hashtagsConcatenated, hashtag));
                }
            }
//            // 유저 닉네임 포함 검색 조건 추가
//            if (nickname != null && !nickname.isEmpty()) {
//                predicates.add(builder.like(userJoin.get("nickname"), "%" + nickname + "%"));
//            }

            return builder.or(predicates.toArray(new Predicate[0]));
        };
    }
}