package com.ssafying.domain.feed.dto.request;

import com.ssafying.domain.feed.entity.FeedHashtag;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class ModifyFeedRequest {

    String content;

    List<String> hashtagsToAdd; // 추가할 해시태그
    List<Integer> hashtagsToDelete; // 삭제할 피드해시태그 아이디

}
