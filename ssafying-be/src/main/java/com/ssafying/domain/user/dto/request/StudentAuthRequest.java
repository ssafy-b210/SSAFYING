package com.ssafying.domain.user.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class StudentAuthRequest {

    String studentName;
    String studentEmail;
    int studentNumber;

}
