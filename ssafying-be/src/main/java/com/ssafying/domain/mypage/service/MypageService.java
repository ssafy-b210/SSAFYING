package com.ssafying.domain.mypage.service;

import com.ssafying.domain.board.dto.response.FindDetailBoardResponse;
import com.ssafying.domain.board.entity.Board;
import com.ssafying.domain.board.repository.jdbc.BoardRepository;
import com.ssafying.domain.feed.dto.FeedDto;
import com.ssafying.domain.feed.dto.response.GetFeedResponse;
import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.feed.entity.FeedHashtag;
import com.ssafying.domain.feed.repository.FeedHashtagRepository;
import com.ssafying.domain.feed.repository.FeedRepository;
import com.ssafying.domain.feed.repository.FeedScrapRepository;
import com.ssafying.domain.feed.service.FeedService;
import com.ssafying.domain.follow.repository.jdbc.FollowRepository;
import com.ssafying.domain.mypage.dto.PortfolioDto;
import com.ssafying.domain.mypage.dto.request.SavePortfolioRequest;
import com.ssafying.domain.mypage.dto.response.FindAuthoredFeedsResponse;
import com.ssafying.domain.mypage.dto.response.FindMypageResponse;
import com.ssafying.domain.mypage.entity.Portfolio;
import com.ssafying.domain.mypage.repository.MypageRepository;
import com.ssafying.domain.user.dto.UserInfoDto;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import com.ssafying.global.dto.HashtagDto;
import com.ssafying.global.entity.Hashtag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class MypageService {

    private final MypageRepository mypageRepository;
    private final UserRepository userRepository;
    private final FollowRepository followRepository;
    private final FeedHashtagRepository feedHashtagRepository;
    private final FeedScrapRepository feedScrapRepository;
    private final FeedRepository feedRepository;
    private final BoardRepository boardRepository;

    private final FeedService feedService;

    /**
     * 6.1 마이페이지 기본조회
     */
    public FindMypageResponse findMypage(int userId){

        User user = getUser(userId);

        UserInfoDto userInfo = UserInfoDto.builder()
                .email(user.getEmail())
                .nickname(user.getNickname())
                .phoneNumber(user.getPhoneNumber())
                .name(user.getName())
                .generation(user.getGeneration())
                .profileImageUrl(user.getProfileImageUrl())
                .intro(user.getIntro())
                .isMajor(user.getIsMajor())
                .build();

        int feedCount = feedRepository.findByUser(user).size();
        int followerCount = followRepository.findByToUser(user).size();
        int followingCount = followRepository.findByFromUser(user).size();;

        return FindMypageResponse.builder()
                .userInfo(userInfo)
                .feedCount(feedCount)
                .followerCount(followerCount)
                .followingCount(followingCount)
                .build();
    }

    /**
     * 6.2 피드에 사용한 해시태그 조회
     */
    public List<HashtagDto> findListUsedHashtags(int userId){
        User user = getUser(userId);

        List<Feed> feeds = feedRepository.findByUser(user);

        // 태그 중복제거
        Set<Hashtag> uniqueHashtags = feeds.stream()
                .flatMap(feed -> feed.getFeedTags().stream().map(FeedHashtag::getHashtag))
                .collect(Collectors.toSet());

        return uniqueHashtags.stream()
                .map(hashtag -> HashtagDto.builder()
                        .id(hashtag.getId())
                        .tagName(hashtag.getTagName())
                        .build())
                .collect(Collectors.toList());
    }



    /**
     * 6.3.1 작성한 피드 조회
     */
    public List<GetFeedResponse> findAuthoredFeeds(int userId) {

        User user = getUser(userId);
        List<Feed> feedList = feedRepository.findByUser(user);

        if(feedList.isEmpty()) {
            throw new RuntimeException("작성한 피드가 존재하지 않습니다");
        }

        List<GetFeedResponse> response = feedList.stream()
                .map(feedService::convertToDto)
                .collect(Collectors.toList());;

        return response;
    }

    /**
     * 6.3.2 작성한 보드 조회
     */
    public List<FindDetailBoardResponse> findAuthoredBoard(int userId) {

        User user = getUser(userId);
        List<Board> feedList = boardRepository.findByUser(user);

        // 보드리스트 조회,,,

        return null;
    }


    /**
     * 6.4.1 스크랩한 피드 조회
     */
    public List<GetFeedResponse> findScrapFeed(int userId) {

        User user = getUser(userId);

        List<Feed> scrapFeedList = feedRepository.findScrapFeedList(user.getId());

        if(scrapFeedList.isEmpty()){
            throw new RuntimeException("해당 유저가 스크랩한 피드가 없습니다");
        }

        List<GetFeedResponse> response = scrapFeedList.stream()
                .map(feedService::convertToDto)
                .collect(Collectors.toList());;

        return response;
    }


    /**
     * 6.4.2 스크랩한 게시판 조회
     */

    /**
     * 6.4.3 스크랩한 채용공고 조회
     */

    /**
     * 6.5.1 마이페이지 포트폴리오 링크 조회
     */
    public List<PortfolioDto> findPortfolio(int userId) {
        List<Portfolio> portfolioList = mypageRepository.findByUser(getUser(userId));

        if(portfolioList.isEmpty()){
                throw new RuntimeException("해당 유저의 바이오링크가 존재하지 않습니다");
        }

        return portfolioList.stream()
                .map(portfolio -> PortfolioDto.builder()
                        .id(portfolio.getId())
                        .url(portfolio.getUrl())
                        .type(portfolio.getType())
                        .build())
                .collect(Collectors.toList());
    }

    /**
     * 6.5.2 마이페이지 포트폴리오 링크 등록
     */
    public Long addPortfolio(int userId, SavePortfolioRequest request) {

        User user = getUser(userId);

        Portfolio portfolio = Portfolio.createPortfolio(
                user,
                request.getPortfolioUrl(),
                request.getType()
        );

        portfolio = mypageRepository.save(portfolio);

        return portfolio.getId();
    }

    /**
     * 6.5.3 마이페이지 포트폴리오 링크 수정
     */
    public Long modifyPortfolio(int portfolioId, SavePortfolioRequest request) {

        Portfolio portfolio = getPortfolio(portfolioId);
        portfolio = Portfolio.modifyPortfolio(
                request.getPortfolioUrl(),
                request.getType()
        );
        mypageRepository.save(portfolio);

        return portfolio.getId();
    }

    /**
     * 6.5.4 마이페이지 포트폴리오 링크 삭제
     */
    public int deletePortfolio(int portfolioId) {
        Portfolio portfolio = getPortfolio(portfolioId);
        mypageRepository.delete(portfolio);
        return portfolioId;
    }


    /**
     * 6.6 마이페이지 리드미 작성(수정)
     */

    private Portfolio getPortfolio(int portfolioId) {
        return mypageRepository.findById(portfolioId)
                .orElseThrow(() -> new RuntimeException("해당하는 포트폴리오가 존재하지 않습니다"));
    }

    private User getUser(int userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("해당하는 유저가 존재하지 않습니다"));
    }

}
