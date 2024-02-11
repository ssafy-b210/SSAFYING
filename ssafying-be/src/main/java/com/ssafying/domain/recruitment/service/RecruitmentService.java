package com.ssafying.domain.recruitment.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafying.domain.recruitment.dto.request.SaveRecruitmentScrapRequest;
import com.ssafying.domain.recruitment.dto.response.SaraminResponse;
import com.ssafying.domain.recruitment.entity.RecruitmentScrap;
import com.ssafying.domain.recruitment.repository.RecruitmentScrapRepository;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.repository.jdbc.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class RecruitmentService {

    private final UserRepository userRepository;
    private final RecruitmentScrapRepository recruitmentScrapRepository;

    @Value("${saramin.token}")
    private String ACCESS_KEY; // 발급받은 accessKey";
    private final ObjectMapper objectMapper = new ObjectMapper();


    public List<SaraminResponse> findListSaramin(String jobCd) {
        try {
//            keywords = URLEncoder.encode(keywords, "UTF-8");
            String apiURL = "https://oapi.saramin.co.kr/job-search?access-key="+ACCESS_KEY+"&job_cd="+jobCd+"&count=110";

            URL url = new URL(apiURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("Accept", "application/json");

            int responseCode = con.getResponseCode();
            BufferedReader br;

            if(responseCode==200) { // 정상 호출
                br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            } else {  // 에러 발생
                br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
            }

            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = br.readLine()) != null) {
                response.append(inputLine);
            }
            br.close();

            return parseSaraminResponse(response.toString());

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Transactional
    public Long addRecruitmentScrap(SaveRecruitmentScrapRequest request) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("해당하는 유저가 존재하지 않습니다"));

        Optional<RecruitmentScrap> existScrap = recruitmentScrapRepository.findByRecruitmentId(request.getRecruitmentId());

        if(existScrap.isPresent()) {
            throw new RuntimeException("이미 해당 채용공고를 스크랩했습니다");
        }

        RecruitmentScrap recruitmentScrap = RecruitmentScrap.createRecruitmentScrap(
                user, request.getRecruitmentId()
        );
        recruitmentScrap =  recruitmentScrapRepository.save(recruitmentScrap);

        return recruitmentScrap.getId();
    }

    @Transactional
    public Long removeRecruitmentScrap(Long recruitmentScrapId) {
        RecruitmentScrap recruitmentScrap = recruitmentScrapRepository.findById(recruitmentScrapId)
                .orElseThrow(() -> new RuntimeException("해당하는 채용공고 스크랩이 존재하지 않습니다"));

        recruitmentScrapRepository.delete(recruitmentScrap);

        return recruitmentScrapId;
    }

    public List<SaraminResponse> parseSaraminResponse(String jsonResponse) throws Exception {
        List<SaraminResponse> saraminResponses = new ArrayList<>();



        JsonNode rootNode = objectMapper.readTree(jsonResponse);
        JsonNode jobsNode = rootNode.path("jobs").path("job");

        for (JsonNode jobNode : jobsNode) {
            SaraminResponse saraminResponse = SaraminResponse.builder()
                    .id(jobNode.path("id").asInt())
                    .title(jobNode.path("position").path("title").asText())
                    .company(jobNode.path("company").path("detail").path("name").asText())
                    .url(jobNode.path("url").asText())
                    .build();
            saraminResponses.add(saraminResponse);
        }

        return saraminResponses;
    }

}
