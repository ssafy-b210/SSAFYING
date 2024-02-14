package com.ssafying.domain.crew.dto.request;

import com.ssafying.domain.crew.entity.CrewComment;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddCrewCommentRequest {


    int userId; //댓글 작성자

    @NotNull(message = "댓글 내용을 작성해주세요.")
    String content; //내용

    @Builder.Default
    Integer parentId = null; //부모댓글


}
