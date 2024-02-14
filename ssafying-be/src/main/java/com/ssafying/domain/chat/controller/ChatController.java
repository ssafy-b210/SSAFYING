package com.ssafying.domain.chat.controller;

import com.ssafying.domain.chat.dto.*;
import com.ssafying.domain.chat.service.ChatService;
import com.ssafying.global.result.ResultResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/chat")
@CrossOrigin("*")
@Tag(name = "채팅")
public class ChatController {

    private final ChatService chatService;

    /**
     * 7.1 방 생성(동시에 사용자 초대)
     *
     */
    @PostMapping("/rooms")
    @Operation(summary = "방 생성과 동시에 사용자초대")
    public ResponseEntity<ResultResponse<Integer>> chatRoomAdd(@RequestBody InviteChatRoomRequest request) {
        Integer result = chatService.addChatRoom(request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 7.2 채팅방 상세조회(입장)
     *
     */
    @GetMapping("/rooms/{roomId}")
    @Operation(summary = "채팅방 상세조회(입장)")
    public ResponseEntity<ResultResponse<ChatRoomDto>> chatRoomFind(
            @PathVariable(name = "roomId") int roomId
    ) {
        ChatRoomDto result = chatService.findChatRoom(roomId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 7.3 사용자 초대
     *
     */
    @PostMapping("/rooms/{roomId}/invite")
    @Operation(summary = "사용자 초대 (그룹채팅방만 가능)")
    public ResponseEntity<ResultResponse<Integer>> chatRoomInvite(
            @PathVariable(name = "roomId") int roomId,
            @RequestBody InviteChatRoomRequest request) {
        Integer result = chatService.addChatRoomUser(roomId, request);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 7.4 참여 중인 채팅방 나가기
     *
     */
    @DeleteMapping("/rooms/{joinRoomId}")
    @Operation(summary = "채팅방 나가기")
    public ResponseEntity<ResultResponse<Integer>> chatRoomExit(
            @PathVariable(name = "joinRoomId") int joinRoomId
    ) {
        Integer result = chatService.exitChatRoom(joinRoomId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 7.5 참여 중인 채팅방 목록 조회
     *
     */
    @GetMapping("/{userId}")
    @Operation(summary = "참여 채팅방 목록 조회")
    public ResponseEntity<ResultResponse<List<ChatRoomUserDto>>> chatRoomUserList(
            @PathVariable(name = "userId") int userId
    ) {
        List<ChatRoomUserDto> result = chatService.findChatRoomUser(userId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }

    /**
     * 7.6 채팅 전송 + 저장
     *
     */
    @MessageMapping("/chatting/{roomId}")
    @Operation(summary = "채팅 전송 + 저장")
    public void chatMessageSend(
            @DestinationVariable("roomId") Integer roomId,
            @RequestBody ChattingRequest request){
        log.info("Message [{}] send by member: {} to chatting room: {}", request.getMessage(), request.getUserId(), roomId);
        chatService.sendChatMessage(roomId, request);
    }

    /**
     * 7.7 채팅 목록 조회
     *
     */
    @GetMapping("/rooms/{roomId}/messages")
    @Operation(summary = "채팅 목록 조회")
    public ResponseEntity<ResultResponse<List<ChatMessageDto>>> chatMessageList(
            @PathVariable(name = "roomId") int roomId
    ) {
        List<ChatMessageDto> result = chatService.findChatMessages(roomId);
        return ResponseEntity.ok(ResultResponse.res(HttpStatus.OK, HttpStatus.OK.toString(), result));
    }







}
