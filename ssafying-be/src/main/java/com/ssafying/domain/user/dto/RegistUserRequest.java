package com.ssafying.domain.user.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafying.domain.shuttle.entity.Campus;
import jakarta.validation.constraints.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Getter
@Setter
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class RegistUserRequest {

    private int id;

    private int campusId;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

    @NotBlank
    private String nickname;

    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime birthday;

    @NotBlank
    private String phoneNumber;

    @NotBlank
    private String name;

    @Min(value = 1)
    private int generation;

    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime createdAt;

    @NotNull
    private boolean isMajor;
}
