package com.ssafying.domain.user.controller;

import com.ssafying.domain.user.dto.RegistUserRequest;
import com.ssafying.domain.user.dto.RegistUserResponse;
import com.ssafying.domain.user.dto.ResultResponse;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.service.UserService;
import com.ssafying.global.result.ResultCode;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserApiController {

    private final UserService userService;

//    @PostMapping("/signup")
//    public ResponseEntity<?> registUser(@RequestBody @Valid RegistUserRequest req){
//        boolean isRegisted = userService.join(req);
//        if(isRegisted){
//            return ResponseEntity.ok(ResultResponse.of(ResultCode.REGIST_SUCCESS));
//        }else{
//            return ResponseEntity.ok(ResultResponse.of(ResultCode.REGIST_FAIL));
//        }
//    }

}
