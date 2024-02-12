package com.ssafying.domain.mypage.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafying.domain.board.dto.response.FindDetailBoardResponse;
import com.ssafying.domain.board.dto.response.FindListBoardResponse;
import com.ssafying.domain.board.entity.Board;
import com.ssafying.domain.board.repository.jdbc.BoardRepository;
import com.ssafying.domain.feed.dto.response.GetFeedResponse;
import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.feed.entity.FeedHashtag;
import com.ssafying.domain.feed.repository.FeedHashtagRepository;
import com.ssafying.domain.feed.repository.FeedRepository;
import com.ssafying.domain.feed.repository.FeedScrapRepository;
import com.ssafying.domain.feed.service.FeedService;
import com.ssafying.domain.follow.repository.jdbc.FollowRepository;
import com.ssafying.domain.mypage.dto.PortfolioDto;
import com.ssafying.domain.mypage.dto.request.ModifyReadmeRequest;
import com.ssafying.domain.mypage.dto.request.SavePortfolioRequest;
import com.ssafying.domain.mypage.dto.response.FindMypageResponse;
import com.ssafying.domain.mypage.dto.response.FindReadmeResponse;
import com.ssafying.domain.mypage.entity.Portfolio;
import com.ssafying.domain.mypage.repository.PortfolioRepository;
import com.ssafying.domain.recruitment.dto.request.CreatePortfolioRequest;
import com.ssafying.domain.recruitment.dto.request.DeletePortfolioRequest;
import com.ssafying.domain.recruitment.dto.request.UpdatePortfolioRequest;
import com.ssafying.domain.recruitment.dto.response.SaraminResponse;
import com.ssafying.domain.recruitment.entity.RecruitmentScrap;
import com.ssafying.domain.recruitment.repository.RecruitmentScrapRepository;
import com.ssafying.domain.recruitment.service.RecruitmentService;
import com.ssafying.domain.user.dto.UserInfoDto;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import com.ssafying.global.dto.HashtagDto;
import com.ssafying.global.entity.Hashtag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class MypageService {

    private final PortfolioRepository portfolioRepository;
    private final UserRepository userRepository;
    private final FollowRepository followRepository;
    private final FeedHashtagRepository feedHashtagRepository;
    private final FeedScrapRepository feedScrapRepository;
    private final FeedRepository feedRepository;
    private final BoardRepository boardRepository;
    private final RecruitmentScrapRepository recruitmentScrapRepository;

    private final FeedService feedService;
    private final RecruitmentService recruitmentService;


    @Value("${saramin.token}")
    private String ACCESS_KEY; // 발급받은 accessKey";
    private final ObjectMapper objectMapper = new ObjectMapper();


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
    public List<FindListBoardResponse> findAuthoredBoard(int userId) {

        User user = getUser(userId);
        List<Board> boardList = boardRepository.findByUser(user);

        // 보드리스트 조회,,,
        if(boardList.isEmpty()) {
            throw new RuntimeException("작성한 게시판이 존재하지 않습니다");
        }

        List<FindListBoardResponse> response = new ArrayList<>();
        for (Board board : boardList) {
            FindListBoardResponse build = FindListBoardResponse.builder()
                    .userName(board.getUser().getName())
                    .isAnonymous(board.isAnonymous())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .category(board.getCategory())
                    .createAt(board.getCreatedAt())
                    .build();

            response.add(build);
        }


        return response;
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
    public List<FindListBoardResponse> findScrapBoard(int userId) {

        User user = getUser(userId);

        List<Board> scrapBoardList = boardRepository.findScrapBoardList(user.getId());

        if(scrapBoardList.isEmpty()){
            throw new RuntimeException("해당 유저가 스크랩한 게시판이 없습니다");
        }

        List<FindListBoardResponse> response = new ArrayList<>();
        for (Board board : scrapBoardList) {
            FindListBoardResponse build = FindListBoardResponse.builder()
                    .userName(board.getUser().getName())
                    .isAnonymous(board.isAnonymous())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .category(board.getCategory())
                    .createAt(board.getCreatedAt())
                    .build();

            response.add(build);
        }

        return response;
    }


    /**
     * 6.4.3 스크랩한 채용공고 조회
     */
    public List<SaraminResponse> findScrapRecruitment(int userId) {

        User user = getUser(userId);
        List<RecruitmentScrap> recruitmentScrap = recruitmentScrapRepository.findByUserOrderByCreatedAtDesc(user);
        List<SaraminResponse> saraminResponses = new ArrayList<>();


        try {
            for (RecruitmentScrap scrap : recruitmentScrap) {
                int recruitmentId = scrap.getRecruitmentId();
                String apiURL = "https://oapi.saramin.co.kr/job-search?access-key=" + ACCESS_KEY + "&id=" + recruitmentId;

                URL url = new URL(apiURL);
                HttpURLConnection con = (HttpURLConnection) url.openConnection();
                con.setRequestMethod("GET");
                con.setRequestProperty("Accept", "application/json");

                int responseCode = con.getResponseCode();
                BufferedReader br;

                if (responseCode == 200) { // Successful response
                    br = new BufferedReader(new InputStreamReader(con.getInputStream()));
                } else { // Error response
                    br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
                }

                String inputLine;
                StringBuilder response = new StringBuilder();
                while ((inputLine = br.readLine()) != null) {
                    response.append(inputLine);
                }
                br.close();

                List<SaraminResponse> parsedResponses = recruitmentService.parseSaraminResponse(response.toString());
                saraminResponses.addAll(parsedResponses);
            }
            return saraminResponses;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    /**
     * 6.5.1 마이페이지 포트폴리오 링크 조회
     */
    public List<PortfolioDto> findPortfolio(int userId) {
        List<Portfolio> portfolioList = portfolioRepository.findByUser(getUser(userId));

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

    @Transactional
    public void controlPortfolio(int userId, SavePortfolioRequest request) {

        User user = getUser(userId);

        List<CreatePortfolioRequest> createPortfolioRequests = request.getCreatePortfolioRequests();
        List<DeletePortfolioRequest> deletePortfolioRequests = request.getDeletePortfolioRequests();
        List<UpdatePortfolioRequest> updatePortfolioRequests = request.getUpdatePortfolioRequests();

        if(updatePortfolioRequests != null) {
            // 바이오링크 수정
            for (UpdatePortfolioRequest updateRequest : updatePortfolioRequests) {
                Portfolio portfolio = getPortfolio(updateRequest.getPortfolioId());
                portfolio = Portfolio.modifyPortfolio(
                        portfolio,
                        updateRequest.getUrl(),
                        updateRequest.getType()
                );
                portfolioRepository.save(portfolio);
            }
        }

        if(deletePortfolioRequests != null) {
            // 바이오링크 삭제
            for (DeletePortfolioRequest deleteRequest : deletePortfolioRequests) {
                Portfolio portfolio = getPortfolio(deleteRequest.getPortfolioId());
                portfolioRepository.delete(portfolio);
            }
        }

        if(createPortfolioRequests != null){
            // 바이오링크 등록
            for (CreatePortfolioRequest createRequest : createPortfolioRequests) {
                Portfolio portfolio = Portfolio.createPortfolio(
                        user,
                        createRequest.getUrl(),
                        createRequest.getType()
                );
                portfolioRepository.save(portfolio);
            }
        }
    }

//    /**
//     * 6.5.2 마이페이지 포트폴리오 링크 등록
//     */
//    @Transactional
//    public Long addPortfolio(int userId, SavePortfolioRequest request) {
//
//        User user = getUser(userId);
//
//        Portfolio portfolio = Portfolio.createPortfolio(
//                user,
//                request.getPortfolioUrl(),
//                request.getType()
//        );
//
//        portfolio = portfolioRepository.save(portfolio);
//
//        return portfolio.getId();
//    }
//
//    /**
//     * 6.5.3 마이페이지 포트폴리오 링크 수정
//     */
//    public Long modifyPortfolio(int portfolioId, SavePortfolioRequest request) {
//
//        Portfolio portfolio = getPortfolio(portfolioId);
//        portfolio = Portfolio.modifyPortfolio(
//                request.getPortfolioUrl(),
//                request.getType()
//        );
//        portfolioRepository.save(portfolio);
//
//        return portfolio.getId();
//    }
//
//    /**
//     * 6.5.4 마이페이지 포트폴리오 링크 삭제
//     */
//    public int deletePortfolio(int portfolioId) {
//        Portfolio portfolio = getPortfolio(portfolioId);
//        portfolioRepository.delete(portfolio);
//        return portfolioId;
//    }


    /**
     * 6.6 마이페이지 리드미 작성(수정)
     */
    @Transactional
    public int modifyReadme(int userId, ModifyReadmeRequest request) {
        User user = getUser(userId);
        user = User.updateReadMe(user, request.getReadme());
        userRepository.save(user);
        return userId;
    }

    /**
     * 6.7 마이페이지 리드미 조회
     */
    public FindReadmeResponse findReadme(int userId) {
        User user = getUser(userId);
        return FindReadmeResponse.builder()
                .readme(user.getReadme())
                .build();
    }


    private Portfolio getPortfolio(int portfolioId) {
        return portfolioRepository.findById(portfolioId)
                .orElseThrow(() -> new RuntimeException("해당하는 포트폴리오가 존재하지 않습니다"));
    }

    private User getUser(int userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("해당하는 유저가 존재하지 않습니다"));
    }

}
