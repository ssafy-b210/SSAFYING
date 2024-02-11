package com.ssafying.domain.mypage.dto.response;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class FindListUsedHashtagResponse {

    List<String> tagNameList;

}
