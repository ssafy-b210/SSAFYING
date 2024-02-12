package com.ssafying.domain.user.repository.jdbc;

import com.ssafying.domain.user.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Integer> {

    // 태그 이름으로 태그찾기
    @Query("select t from Tag t where t.tagName = :tagName")
    Optional<Tag> findByTagName(@Param("tagName")String tagName);
}
