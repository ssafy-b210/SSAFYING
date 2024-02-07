package com.ssafying.domain.user.controller;

import com.ssafying.domain.user.dto.request.RemoveUserRequest;
import com.ssafying.domain.user.dto.request.UpdateUserRequest;
import com.ssafying.domain.user.dto.response.UserDetailResponse;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.service.UserService;
import com.ssafying.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@Tag(name = "유저")
@CrossOrigin("*")
public class UserApiController {

    private final UserService userService;

    /**
     * 1.4 회원 정보 조회
     */

    @GetMapping("/{userId}")
    @Operation(summary = "회원 정보 조회")
    public ResponseEntity<ResultResponse<UserDetailResponse>> userDetails(@PathVariable(name = "userId") int userId){

        UserDetailResponse result = userService.findUserInfo(userId);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));

    }

    /**
     * 1.5 회원 정보 수정
     */
    @PatchMapping("/{userId}")
    @Operation(summary = "회원 정보 수정")
    public ResponseEntity<ResultResponse<Integer>> userModify(@PathVariable(name = "userId") int userId,
                                                              @RequestBody UpdateUserRequest request){

        int result = userService.modifyUser(userId, request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }


    /**
     * 1.6 회원 탈퇴
     * TODO : 회원상태 바꿔서 데이터는 가지고 있도록
     */
    @DeleteMapping("/{userId}")
    @Operation(summary = "회원 탈퇴")
    public ResponseEntity<ResultResponse<Integer>> userRemove(
            @RequestBody RemoveUserRequest request
            ){

        int result =  userService.removeUser(request);

        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));

    }



}
