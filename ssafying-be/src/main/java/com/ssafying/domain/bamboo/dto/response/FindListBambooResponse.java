package com.ssafying.domain.bamboo.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class FindListBambooResponse {

    String content;

    LocalDateTime createdAt;

    Long countComment;
}
