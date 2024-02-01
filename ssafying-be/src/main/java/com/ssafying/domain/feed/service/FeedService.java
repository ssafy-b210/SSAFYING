package com.ssafying.domain.feed.service;

import com.ssafying.domain.feed.dto.request.CreateFeedRequest;
import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.feed.entity.FeedHashtag;
import com.ssafying.domain.feed.entity.FeedImage;
import com.ssafying.domain.feed.repository.*;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import com.ssafying.global.entity.Hashtag;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import static com.ssafying.global.entity.Hashtag.createTag;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class FeedService {

    private final FeedRepository feedRepository;
    private final FeedLikeRepository feedLikeRepository;
    private final FeedImageRepository feedImageRepository;
    private final FeedScrapRepository feedScrapRepository;
    private final FeedCommentRepository feedCommentRepository;
    private final FeedHashtagRepository feedHashtagRepository;
    private final FeedCommentLikeRepository feedCommentLikeRepository;

    private final UserRepository userRepository;
    private final HashtagRepository hashtagRepository;

    @Transactional
    public int createFeed(CreateFeedRequest request) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("해당하는 유저가 존재하지 않습니다"));
        // 피드 객체 생성
        Feed feed = Feed.createFeed(
                user,
                request.getContent()
        );
        // 피드 저장
        feed = feedRepository.save(feed);
        List<String> tags = request.getHashtags();
        for(String tag : tags){
            // 태그 검색, 존재하지 않는 태그면 테이블에 생성
            Hashtag hashtag = hashtagRepository.findByTagName(tag)
                    .orElseGet(() -> createAndSaveTag(tag));
            FeedHashtag feedHashtag = FeedHashtag.createFeedtag(
                        feed,
                        hashtag
                    );
            feedHashtagRepository.save(feedHashtag);
        }

        List<String> imgUrls = request.getImageUrls();
        for(String url : imgUrls){
            FeedImage feedImage = FeedImage.createFeedImage(
                    feed,
                    url
            );
            feedImageRepository.save(feedImage);
        }

        List<String> imageUrls = feed.getFeedImages().stream()
                .map(FeedImage::getImageUrl)
                .toList();
        System.out.println(imageUrls.toString());

        return feed.getId();
    }




    private Hashtag createAndSaveTag(String tag) {
        Hashtag newTag = createTag(tag);
        hashtagRepository.save(newTag);
        return newTag;
    }

}
