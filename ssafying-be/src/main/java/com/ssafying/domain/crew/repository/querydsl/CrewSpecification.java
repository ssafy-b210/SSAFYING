package com.ssafying.domain.crew.repository.querydsl;

import com.ssafying.domain.crew.entity.Crew;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;
import java.util.function.Predicate;

public interface CrewSpecification<T> {
    List<Crew> findAll(Specification<Crew> spec);
}
