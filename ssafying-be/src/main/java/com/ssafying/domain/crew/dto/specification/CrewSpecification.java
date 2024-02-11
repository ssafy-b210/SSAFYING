package com.ssafying.domain.crew.dto.specification;

import com.ssafying.domain.crew.entity.Category;
import com.ssafying.domain.crew.entity.Crew;
import com.ssafying.domain.crew.entity.Region;
import org.springframework.data.jpa.domain.Specification;

public class CrewSpecification {

    /*
     * title like = ?
     */
    public static Specification<Crew> containingTitle(String title){
        return (root, query, CriteriaBuilder) -> CriteriaBuilder.like(root.get("title"), "%" + title + "%");

    }

    /*
     * region = ?
     */
    public static Specification<Crew> findByRegion(Region region) {
        return (root, query, CriteriaBuilder) -> CriteriaBuilder.equal(root.get("region"), region);
    }

    /*
     * category = ?
     */
    public static Specification<Crew> findByCategory(Category category){
        return (root, query, CriteriaBuilder) -> CriteriaBuilder.equal(root.get("category"), category);
    }

    /*
     * isRecruit = ?
     */
    public static Specification<Crew> isRecruit(boolean isRecruit){
        return (root, query, CriteriaBuilder) -> CriteriaBuilder.equal(root.get("isRecruit"), isRecruit);
    }

}
