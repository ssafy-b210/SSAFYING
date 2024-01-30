package com.ssafying.domain.user.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafying.domain.shuttle.entity.CampusRegion;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistUserRequest {

    private int userId;

    private CampusRegion campusRegion;

    @NotBlank
    private String email;

    @NotBlank
    private String password;

    @NotBlank
    private String nickname;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDateTime birthday;

    @NotBlank
    private String phoneNumber;

    @NotBlank
    private String name;

    @NotNull
    private int generation;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDateTime createdAt;

    @NotNull
    private boolean isMajor;
}
