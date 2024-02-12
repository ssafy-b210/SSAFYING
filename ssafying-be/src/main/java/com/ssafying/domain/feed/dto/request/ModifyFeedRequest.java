package com.ssafying.domain.feed.dto.request;

import com.ssafying.domain.feed.entity.FeedHashtag;
import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ModifyFeedRequest {

    String content;

    List<String> hashtagsToAdd; // 추가할 해시태그
    List<Integer> hashtagsToDelete; // 삭제할 피드해시태그 아이디

}
