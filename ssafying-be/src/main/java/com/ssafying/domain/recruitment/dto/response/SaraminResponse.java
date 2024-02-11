package com.ssafying.domain.recruitment.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SaraminResponse {

    /**
     *           index={item.id}
     *           title={item.position.title}
     *           company={item.company.detail.name}
     *           url={item.url}
     */

    int id;
    String title;
    String company;
    String url;

}
