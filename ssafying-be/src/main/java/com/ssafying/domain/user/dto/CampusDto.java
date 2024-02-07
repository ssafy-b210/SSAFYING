package com.ssafying.domain.user.dto;

import com.ssafying.domain.shuttle.entity.CampusRegion;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class CampusDto {

    private int campusId; //캠퍼스 아이디

    private CampusRegion campusRegion; //캠퍼스 지역
}
