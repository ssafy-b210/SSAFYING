package com.ssafying.domain.feed.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddFeedRequest {

    @NotNull(message = "유저 pk는 필수 항목입니다.")
    int userId;

    @NotNull(message = "내용은 필수 항목입니다.")
    String content;
    
    List<String> imageUrls;

    @NotNull(message = "해시태그는 필수 항목입니다.")
    List<String> hashtags;

}
