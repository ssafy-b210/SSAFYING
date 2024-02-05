package com.ssafying.domain.feed.service;

import com.ssafying.domain.feed.dto.request.AddFeedRequest;
import com.ssafying.domain.feed.entity.Feed;
import com.ssafying.domain.feed.entity.FeedImage;
import com.ssafying.domain.feed.repository.FeedRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class FeedServiceTest {

    @Autowired
    private FeedService feedService;

    @Autowired
    private FeedRepository feedRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EntityManager em;



    @Test
    public void 피드_생성() throws Exception {

        User user = new User();
//        user.setName("sss");

        user = userRepository.save(user);

        // given
        AddFeedRequest request = AddFeedRequest.builder()
                .userId(user.getId())
                .content("Example Content")
                .imageUrls(List.of("url1", "url2"))
                .hashtags(List.of("tag1", "tag2"))
                .build();

        // when
        int savedId = feedService.addFeed(request);

        em.flush();
        em.clear();

        Optional<Feed> savedFeed = feedRepository.findById(savedId);
        assertTrue(savedFeed.isPresent());

        // then
        Feed feed = savedFeed.get();
        assertThat(feed.getUser().getId()).isEqualTo(user.getId()); // UserId 일치 여부 확인
        assertThat(feed.getContent()).isEqualTo("Example Content"); // content 일치 여부 확인

        List<String> imageUrls = feed.getFeedImages().stream()
                .map(FeedImage::getImageUrl)
                .collect(Collectors.toList());
        assertThat(imageUrls).containsExactlyInAnyOrderElementsOf(List.of("url1", "url2"));

    }

}