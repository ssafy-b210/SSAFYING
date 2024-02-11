package com.ssafying.domain.mypage.dto.request;

import com.ssafying.domain.mypage.entity.PortfolioType;
import com.ssafying.domain.recruitment.dto.request.CreatePortfolioRequest;
import com.ssafying.domain.recruitment.dto.request.DeletePortfolioRequest;
import com.ssafying.domain.recruitment.dto.request.UpdatePortfolioRequest;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

import java.util.List;

@Getter
public class SavePortfolioRequest {

    List<CreatePortfolioRequest> createPortfolioRequests;
    List<DeletePortfolioRequest> deletePortfolioRequests;
    List<UpdatePortfolioRequest> updatePortfolioRequests;

}
