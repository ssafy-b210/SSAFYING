package com.ssafying.domain.feed.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class SaveFeedScrapRequest {

    @NotNull(message = "유저 id는 필수 입력 항목입니다")
    int userId;
    @NotNull(message = "피드 id는 필수 입력 항목입니다")
    int feedId;

}
