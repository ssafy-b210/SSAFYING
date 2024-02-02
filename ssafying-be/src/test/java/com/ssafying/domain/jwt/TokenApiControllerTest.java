package com.ssafying.domain.jwt;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import com.ssafying.global.config.jwt.JwtFactory;
import com.ssafying.global.config.jwt.JwtProperties;
import com.ssafying.global.config.jwt.dto.CreateAccessTokenRequest;
import com.ssafying.global.config.jwt.entity.RefreshToken;
import com.ssafying.global.config.jwt.repository.RefreshTokenRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.Map;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
class TokenApiControllerTest {

    @Autowired
    protected MockMvc mockMvc;

    @Autowired
    protected ObjectMapper objectMapper;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    JwtProperties jwtProperties;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RefreshTokenRepository refreshTokenRepository;

    @BeforeEach
    public void mockMvcSetUp() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context)
                .build();
        userRepository.deleteAll();
    }

    @DisplayName("createNewAccessToken: 새로운 액세스 토큰을 발급한다.")
    @Test
    public void createNewAccessToken() throws Exception {
        // given : 테스트 유저를 생성하고, jjwt 라이브러리를 이용해 리프레시 토큰을 마들어 데이터베이스에 저장한다.
        //         토큰 생성 API의 요청 본문에 리프레시 토큰을 포함하여 요청 객체를 생성한다.
        final String url = "/api/token";

        User user = new User();
        user.setEmail("ssafy123@ssafy.com");
        user.setPassword("1234");
        user.setName("이애옹");

        userRepository.save(user);

        String refreshToekn = JwtFactory.builder()
                .claims(Map.of("id", user.getId()))
                .build()
                .createToken(jwtProperties);

        refreshTokenRepository.save(new RefreshToken(user.getId(), refreshToekn));

        CreateAccessTokenRequest request = new CreateAccessTokenRequest();
        request.setRefreshToken(refreshToekn);
        final String requestBody = objectMapper.writeValueAsString(request);

        // when : 토큰 추가 API에 요청을 보낸다.
        //        이때 요청 타입은 JSON이고, given절에서 미리 만들어둔 객체를 요청 본문으로 함께 보낸다.
        ResultActions resultActions = mockMvc.perform(post(url)
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(requestBody));

        // then : 응답 코드가 201 Created인지 확인하고 응답으로 온 액세스 토큰이 비어 있지 않은지 확인한다.
        resultActions
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.accessToken").isNotEmpty());
    }

}