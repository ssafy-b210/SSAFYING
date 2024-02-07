package com.ssafying.domain.follow.dto.specification;

import com.ssafying.domain.follow.entity.Follow;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.domain.Specification;

public class FollowSpecification {

    /*
     * nickname like = ?
     */
    public static Specification<Follow> containingNickname(String nickname){
        return (root, query, CriteriaBuilder) -> CriteriaBuilder.like(root.get("nickname"), "%" + nickname + "%");
    }

}
