package com.ssafying.domain.user.controller;

import com.ssafying.domain.user.dto.request.UpdateUserRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserApiController {

    private final UserService userService;

    /*
     * 1.4 회원 정보 조회
     */

    @GetMapping("/users/{userId}")
    public User userDetail(@PathVariable(name = "userId") int userId){

        User user = userService.detailUser(userId);

        return user;

    }

    /*
     * 1.5 회원 정보 수정
     */
    @PatchMapping("/users")
    public ResponseEntity<?> userUpdate(@RequestBody UpdateUserRequest request){

        User user = userService.UpdateUser(request);

        return new ResponseEntity<>(HttpStatus.OK);
    }


}
