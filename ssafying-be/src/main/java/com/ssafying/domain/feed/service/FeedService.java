package com.ssafying.domain.feed.service;

import com.ssafying.domain.feed.dto.request.CreateCommentRequest;
import com.ssafying.domain.feed.dto.request.CreateFeedRequest;
import com.ssafying.domain.feed.dto.request.ToggleFeedLikeRequest;
import com.ssafying.domain.feed.entity.*;
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


    /**
     * 3.1 피드 작성
     *
     */
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

    /**
     * 3.2 피드 삭제
     *
     */
    public int deleteFeed() {
        return 0;
    }

    /**
     * 3.3 피드 전체조회
     *
     */
    public List<Feed> getFeeds() {
        /*
        우선순위
        팔로잉
        시간
        좋아요
        .....
        ..
        다 끝나면
        추천피드
         */

        List<Feed> feeds = feedRepository.findAll();
        return null;
    }


    /**
     * 3.4 피드 상세조회
     *
     */
    public Feed getFeed(int feedId) {
        return null;
    }

    /**
     * 3.5 피드 좋아요
     *
     */
    public int toggleFeedLike(ToggleFeedLikeRequest request) {



        return 0;
    }

    /**
     * 3.6 피드 좋아요 리스트
     *
     */
    public List<FeedLike> getFeedLikes() {
        return null;
    }

    /**
     * 3.7 피드 검색
     *
     */

    /**
     * 3.8 피드 수정
     *
     */

    /**
     * 3.9 피드 스크랩 / 취소
     *
     */


    /**
     * 3.10 피드 검색
     *
     */
    public int createComment(CreateCommentRequest request) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("해당하는 유저가 존재하지 않습니다"));


        // 답글, 댓글 여부 판단해야함,,,

        FeedComment parentComment = feedCommentRepository.findById(request.getParentId())
                .orElseThrow(() -> new RuntimeException("해당하는 부모 댓글이 없습니다"));

        FeedComment feedComment = FeedComment.createComment(
                user,
                request.getContent(),
                parentComment
        );

        feedComment = feedCommentRepository.save(feedComment);

        return feedComment.getId();
    }


    /**
     * 3.11 피드댓글 삭제
     *
     */

    /**
     * 3.12 피드댓글 좋아요 / 취소
     *
     */


    private Hashtag createAndSaveTag(String tag) {
        Hashtag newTag = createTag(tag);
        hashtagRepository.save(newTag);
        return newTag;
    }

}
