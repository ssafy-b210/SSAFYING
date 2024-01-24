package com.ssafying.domain.user.controller;

import com.ssafying.domain.user.dto.RegistUserRequest;
import com.ssafying.domain.user.dto.RegistUserResponse;
import com.ssafying.domain.user.dto.ResultCode;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.service.UserService;
import jakarta.validation.Valid;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserApiController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<RegistUserResponse> registUser(@RequestBody @Valid RegistUserRequest request){


        final boolean isRegisted = userService.join(request);

        if(isRegisted){
            return ResponseEntity.ok(RegistUserResponse.of(ResultCode.REGISTER_SUCCESS,true));
        }else{
            return ResponseEntity.ok(RegistUserResponse.of(ResultCode.REGISTER_FAIL,true));
        }

    }

}
