package com.ssafying.domain.user.dto;

import com.ssafying.domain.shuttle.entity.CampusRegion;
import lombok.Data;


import java.time.LocalDateTime;

@Data
public class RegistUserResponse {

    private int id;
    private CampusRegion campusRegion;
    private String email;
    private String password;
    private String nickname;
    private LocalDateTime birthday;
    private String phoneNumber;
    private String name;
    private int generation;
    private LocalDateTime createdAt;
    private boolean isMajor;

}
