package com.ssafying.domain.mypage.dto.response;

import com.ssafying.domain.user.dto.SimpleUserDto;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class FindAuthoredFeedsResponse {

    SimpleUserDto user;


}
