package com.ssafying.domain.feed.service;

import com.ssafying.domain.feed.dto.*;
import com.ssafying.domain.feed.dto.response.GetFeedResponse;
import com.ssafying.domain.feed.dto.request.*;
import com.ssafying.domain.feed.dto.response.GetFeedLikesResponse;
import com.ssafying.domain.feed.entity.*;
import com.ssafying.domain.feed.repository.*;
import com.ssafying.domain.follow.dto.response.FindFollowingListResponse;
import com.ssafying.domain.follow.repository.jdbc.FollowRepository;
import com.ssafying.domain.follow.service.FollowService;
import com.ssafying.domain.user.dto.SimpleUserDto;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import com.ssafying.global.entity.Hashtag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
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
    private final FollowRepository followRepository;

    private final FollowService followService;

    private final int MAXIMUM_NUMBER_FEEDS = 10;

    /**
     * 3.1 피드 작성
     *
     */
    @Transactional
    public Long addFeed(AddFeedRequest request) {

        User user = getUser(request.getUserId());
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
            getOrCreateHashtag(feed, tag);
        }

        List<String> imgUrls = request.getImageUrls();
        for(String url : imgUrls){
            FeedImage feedImage = FeedImage.createFeedImage(
                    feed,
                    url
            );
            feedImageRepository.save(feedImage);
        }

//        List<String> imageUrls = feed.getFeedImages().stream()
//                .map(FeedImage::getImageUrl)
//                .toList();

        return feed.getId();
    }

    /**
     * 3.2 피드 삭제
     *
     */

    @Transactional
    public int removeFeed(int feedId) {

        Feed feed = getFeed(feedId);
        feedRepository.delete(feed);

        return feedId;
    }

    /**
     * 3.3 팔로잉한 유저 피드 조회
     *
     */
    public List<FeedDto> findFeed(int userId) {

        // 팔로잉한 유저들이 쓴 게시글 중 7일 이내에 작성한 게시글, 최대 20개 리턴

        List<Feed> allFeeds = new ArrayList<>();
        List<FindFollowingListResponse> followingList = followService.followingList(userId);

        // 팔로잉한 유저들이 쓴 게시글 중 7일 이내에 작성한 게시글, 최대 20개 리턴
        for (FindFollowingListResponse followingUser : followingList) {
            List<Feed> userFeeds = feedRepository.findFeedsByUserIdAndDate(
                    followingUser.getId(), LocalDateTime.now().minusDays(7)
            );
            allFeeds.addAll(userFeeds);
        }
        allFeeds.sort(Comparator.comparing(Feed::getCreatedAt).reversed());
        allFeeds = allFeeds.stream().limit(MAXIMUM_NUMBER_FEEDS).collect(Collectors.toList());



        return  allFeeds.stream()
                .map(this::convertToFeedDto)  // Use "this" to refer to the current instance
                .collect(Collectors.toList());
    }


    /**
     * 3.4 피드 상세조회
     *
     */
    @Transactional
    public FeedDto findDetailFeed(int feedId) {

        Feed feed = getFeed(feedId);
        Feed.increaseHit(feed);
        feedRepository.save(feed);

        FeedDto response = convertToFeedDto(feed);
        response.setParentCommentList(convertToParentCommentDtoList(feed.getFeedComments()));

        return response;
    }

    /**
     * 3.5.1 피드 좋아요 등록
     */
    @Transactional
    public int addFeedLike(SaveLikeFeedRequest request) {
        Feed feed = getFeed(request.getFeedId());
        User user = getUser(request.getUserId());

        Optional<FeedLike> existingFeedLike = feedLikeRepository.findByUserAndFeed(user, feed);

        if (existingFeedLike.isPresent()) {
            throw new RuntimeException("이미 좋아요를 등록한 피드입니다.");
        } else {
            FeedLike feedLike = FeedLike.createFeedLike(feed, user);
            feedLike = feedLikeRepository.save(feedLike);
            return feedLike.getId();
        }
    }

    /**
     * 3.5.2 피드 좋아요 취소
     */
    @Transactional
    public int removeFeedLike(SaveLikeFeedRequest request) {
        Feed feed = getFeed(request.getFeedId());
        User user = getUser(request.getUserId());

        FeedLike existingFeedLike = feedLikeRepository.findByUserAndFeed(user, feed)
                .orElseThrow(() -> new RuntimeException("해당하는 피드 좋아요가 존재하지 않습니다"));
        int id = existingFeedLike.getId();
        feedLikeRepository.delete(existingFeedLike);
        return id;
    }

    /**
     * 3.6 피드 좋아요 리스트
     *
     */
    public List<GetFeedLikesResponse> findFeedLike(int feedId) {
        List<FeedLike> feedLikeList = feedLikeRepository.findByFeed(getFeed(feedId));

        if (feedLikeList.isEmpty()) {
            throw new RuntimeException("해당 " +feedId + "번 피드 id로 좋아요 목록을 찾지 못했습니다");
        }

        return feedLikeList.stream()
                .map(feedLike -> {
                    User user = getUser(feedLike.getUser().getId());

                    return GetFeedLikesResponse.builder()
                            .userId(user.getId())
                            .nickname(user.getNickname())
                            .profileImageUrl(user.getProfileImageUrl())
                            .build();
                })
                .toList();
    }

    /**
     * 3.7 피드 검색
     *
     */
    public List<GetFeedResponse> searchFeed(String hashtag, String nickname) {
        Specification<Feed> specification = FeedSpecification.containingHashtagOrNickname(hashtag, nickname);
        List<Feed> feeds = feedRepository.findAll(specification);
        return feeds.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    /**
     * 3.8 피드 수정
     *
     */
    @Transactional
    public int modifyFeed(int feedId, ModifyFeedRequest request) {
        Feed feed = getFeed(feedId);

        feed = Feed.modifyFeed(feed, request.getContent());
        feedRepository.save(feed);

        List<String> tagToAdd = Optional.ofNullable(request.getHashtagsToAdd()).orElse(new ArrayList<>());
        if(!tagToAdd.isEmpty()){
            for(String tag : tagToAdd){
                // 태그 검색, 존재하지 않는 태그면 테이블에 생성
                getOrCreateHashtag(feed, tag);
            }
        }

        List<Integer> tagToDelete = Optional.ofNullable(request.getHashtagsToDelete()).orElse(new ArrayList<>()); // null이면 초기화
        if(!tagToDelete.isEmpty()){
            for(Integer tagId : tagToDelete) {
                FeedHashtag feedHashtag  = feedHashtagRepository.findById(tagId)
                        .orElseThrow(() -> new RuntimeException("삭재하려는 피드태그가 존재하지 않습니다"));
                feedHashtagRepository.delete(feedHashtag);
            }
        }

        return feedId;
    }

    /**
     * 3.9.1 피드 스크랩
     *
     */
    @Transactional
    public Integer addFeedScrap(SaveFeedScrapRequest request) {

        User user = getUser(request.getUserId());
        Feed feed = getFeed(request.getFeedId());

        Optional<FeedScrap> existScrapFeed = feedScrapRepository.findByFeedAndUser(feed, user);

        if(existScrapFeed.isPresent()){
            throw new RuntimeException("이미 스크랩을 한 피드입니다");
        }

        FeedScrap feedScrap = FeedScrap.createFeedScrap(feed, user);
        feedScrap = feedScrapRepository.save(feedScrap);

        return feedScrap.getId();
    }

    /**
     * 3.9.2.2 피드 스크랩 취소
     *
     */
    @Transactional
    public int removeFeedScrap(SaveFeedScrapRequest request) {
        User user = getUser(request.getUserId());
        Feed feed = getFeed(request.getFeedId());

        FeedScrap existingFeedScrap = feedScrapRepository.findByFeedAndUser(feed, user)
                .orElseThrow(() -> new RuntimeException("해당하는 피드 스크랩이 존재하지 않습니다"));
        int id = existingFeedScrap.getId();
        feedScrapRepository.delete(existingFeedScrap);
        return id;
    }

    /**
     * 3.10 피드 댓글 조회
     */
    public List<ParentCommentDto> findFeedList(int feedId) {
        Feed feed = getFeed(feedId);
        return convertToParentCommentDtoList(feed.getFeedComments());
    }
    
    /**
     * 3.10 피드 댓글 작성
     */
    @Transactional
    public int addFeedComment(int feedId, AddCommentRequest request) {
        User user = getUser(request.getUserId());

        if (request.getParentId() == null) {
            // 부모댓글 없으면 일반 댓글
            FeedComment feedComment = FeedComment.createComment(
                    user,
                    getFeed(feedId),
                    request.getContent(),
                    null);
            feedComment = feedCommentRepository.save(feedComment);
            return feedComment.getId();
        } else {
            // 부모댓글 있으면 대댓글
            FeedComment parentComment = feedCommentRepository.findById(request.getParentId())
                    .orElseThrow(() -> new RuntimeException("해당하는 부모 댓글이 없습니다"));

            FeedComment childComment = FeedComment.createComment(
                    user,
                    getFeed(feedId),
                    request.getContent(),
                    parentComment);
            childComment = feedCommentRepository.save(childComment);
            return childComment.getId();
        }
    }


    /**
     * 3.11 피드댓글 삭제
     *
     */
    @Transactional
    public int removeFeedComment(int commentId) {
        FeedComment comment = getFeedComment(commentId);
        // 부모댓글이 없으면 자식댓글 상태변경 후 삭제
        if (comment.getParentComment() == null) {
            markCommentAndChildrenAsDeleted(comment);
            feedCommentRepository.delete(comment);
        } else {
            // 부모댓글 있으면 그냥 삭제
            feedCommentRepository.delete(comment);
        }
        return commentId;
    }

    /**
     * 3.12.1 피드댓글 좋아요 등록
     */
    @Transactional
    public int addFeedCommentLike(SaveFeedCommentLikeRequest request) {
        FeedComment comment = getFeedComment(request.getCommentId());
        User user = getUser(request.getUserId());

        Optional<FeedCommentLike> existingCommentLike = feedCommentLikeRepository.findByUserAndFeedComment(user, comment);

        if (existingCommentLike.isPresent()) {
            throw new RuntimeException("이미 좋아요를 등록한 댓글입니다.");
        } else {
            FeedCommentLike commentLike = FeedCommentLike.createCommentLike(user, comment);
            commentLike = feedCommentLikeRepository.save(commentLike);
            return commentLike.getId();
        }
    }

    /**
     * 3.12.2 피드댓글 좋아요 취소
     */
    @Transactional
    public int removeFeedCommentLike(SaveFeedCommentLikeRequest request) {
        FeedComment comment = getFeedComment(request.getCommentId());
        User user = getUser(request.getUserId());

        FeedCommentLike existingCommentLike = feedCommentLikeRepository.findByUserAndFeedComment(user, comment)
                .orElseThrow(() -> new RuntimeException("해당하는 댓글 좋아요가 존재하지 않습니다"));

        feedCommentLikeRepository.delete(existingCommentLike);
        return request.getCommentId();
    }


    private Hashtag createAndSaveTag(String tag) {
        Hashtag newTag = createTag(tag);
        hashtagRepository.save(newTag);
        return newTag;
    }

    private Feed getFeed(int feedId){
        return feedRepository.findById(feedId)
                .orElseThrow(() -> new RuntimeException("해당하는 피드가 없습니다"));
    }

    private User getUser(int userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("해당하는 유저가 존재하지 않습니다"));
    }

    private FeedComment getFeedComment(int commentId) {
        return feedCommentRepository.findById(commentId)
                .orElseThrow(() -> new RuntimeException("해당하는 댓글이 없습니다"));
    }


    private void markCommentAndChildrenAsDeleted(FeedComment comment) {
        for (FeedComment childComment : comment.getChildComments()) {
            childComment.markAsDeleted();
        }
    }

    public void getOrCreateHashtag(Feed feed, String tag) {
        Hashtag hashtag = hashtagRepository.findByTagName(tag)
                .orElseGet(() -> createAndSaveTag(tag));
        FeedHashtag feedHashtag = FeedHashtag.createFeedtag(
                feed,
                hashtag
        );
        feedHashtagRepository.save(feedHashtag);
    }

    public GetFeedResponse convertToDto(Feed feed) {
        long commentCount = feed.getFeedComments().stream()
                .filter(comment -> !comment.isDeleted())
                .count();

        long likeCount = feed.getFeedLikes().size();

        return GetFeedResponse.builder()
                .id(feed.getId())
                .user(SimpleUserDto.builder()
                        .id(feed.getUser().getId())
                        .nickname(feed.getUser().getNickname())
                        .profileImageUrl(feed.getUser().getProfileImageUrl())
                        .build())
                .content(feed.getContent())
                .hit(feed.getHit())
                .feedTags(feed.getHashtagNames())  // feedTags 대신 getHashtagNames 메서드 활용
                .feedImages(feed.getImageUrls())  // feedImages 대신 getImageUrls 메서드 활용
                .createdAt(feed.getCreatedAt())
                .updatedAt(feed.getUpdatedAt())
                .commentCount(commentCount)
                .likeCount(likeCount)
                .build();
    }

    private FeedDto convertToFeedDto(Feed feed) {
        long commentCount = feed.getFeedComments().stream()
                .filter(comment -> !comment.isDeleted())
                .count();

        long likeCount = feed.getFeedLikes().size();

        return FeedDto.builder()
                .id(feed.getId())
                .user(SimpleUserDto.builder()
                        .id(feed.getUser().getId())
                        .nickname(feed.getUser().getNickname())
                        .profileImageUrl(feed.getUser().getProfileImageUrl())
                        .build())
                .content(feed.getContent())
                .hit(feed.getHit())
                .feedTags(feed.getFeedTags().stream()
                        .map(feedHashtag ->
                                FeedHashtagDto.builder()
                                        .id(feedHashtag.getId())
                                        .tagName(feedHashtag.getHashtag().getTagName())
                                        .build())
                        .collect(Collectors.toList()))
                .feedImages(feed.getFeedImages().stream()
                        .map(feedImage ->
                                FeedImageDto.builder()
                                        .id(feedImage.getId())
                                        .imageUrl(feedImage.getImageUrl())
                                        .build())
                        .collect(Collectors.toList()))
                .createdAt(feed.getCreatedAt())
                .updatedAt(feed.getUpdatedAt())
                 .commentCount(commentCount)
                 .likeCount(likeCount)
                .build();
    }

    private List<ParentCommentDto> convertToParentCommentDtoList(List<FeedComment> parentComments) {
        return parentComments.stream()
                .map(parentComment -> ParentCommentDto.builder()
                        .user(convertToSimpleUserDto(parentComment.getUser()))
                        .content(parentComment.getContent())
                        .likeCounts(parentComment.getCommentLikes().size())
                        .childComments(convertToChildCommentDtoList(parentComment.getChildComments()))
                        .build())
                .collect(Collectors.toList());
    }

    private SimpleUserDto convertToSimpleUserDto(User user) {
        return SimpleUserDto.builder()
                .id(user.getId())
                .nickname(user.getNickname())
                .profileImageUrl(user.getProfileImageUrl())
                .build();
    }

    private List<ChildCommentDto> convertToChildCommentDtoList(List<FeedComment> childComments) {
        return childComments.stream()
                .map(this::convertToChildCommentDto)
                .collect(Collectors.toList());
    }

    private ChildCommentDto convertToChildCommentDto(FeedComment childComment) {
        return ChildCommentDto.builder()
                .user(convertToSimpleUserDto(childComment.getUser()))
                .content(childComment.getContent())
                .isDeleted(childComment.isDeleted())
                .likeCounts(childComment.getCommentLikes().size())
                .build();
    }

}
