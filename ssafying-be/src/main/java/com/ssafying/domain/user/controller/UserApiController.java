package com.ssafying.domain.user.controller;

import com.ssafying.domain.user.dto.request.UpdateUserRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@Tag(name = "USER")
public class UserApiController {

    private final UserService userService;

    /*
     * 1.4 회원 정보 조회
     */

    @GetMapping("/{userId}")
    @Operation(summary = "회원 정보 조회")
    public User userDetail(@PathVariable(name = "userId") int userId){

        User user = userService.detailUser(userId);

        return user;

    }

    /*
     * 1.5 회원 정보 수정
     */
    @PatchMapping("/{userId}")
    @Operation(summary = "회원 정보 수정")
    public int userUpdate(@PathVariable(name = "userId") int userId,
                           @RequestBody UpdateUserRequest request){

        User user = userService.UpdateUser(userId, request);

        return userId;
    }


    /*
     * 1.6 회원 탈퇴
     */
    @DeleteMapping("/{userId}")
    @Operation(summary = "회원 탈퇴")
    public int userDelete(@PathVariable(name = "userId") int userId){

        userService.DeleteUser(userId);

        return userId;

    }



}
