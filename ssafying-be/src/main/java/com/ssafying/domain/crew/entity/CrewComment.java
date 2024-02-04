package com.ssafying.domain.crew.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafying.domain.crew.dto.request.AddCrewCommentRequest;
import com.ssafying.domain.crew.dto.request.AddCrewRequest;
import com.ssafying.domain.user.entity.User;
import com.ssafying.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "crew_comment")
@Getter
public class CrewComment extends BaseTimeEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "crew_comment_id")
    private int id; //구해요 - 댓글 id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user; //작성자

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "crew_id")
    @JsonIgnore
    private Crew crew; //해당 게시글

    private String content; //댓글 내용

    @Column(name = "is_deleted")
    private boolean isDeleted; //삭제 여부

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    @JsonIgnore
    private CrewComment parentComment; //부모댓글

    @OneToMany(mappedBy = "parentComment")
    private List<CrewComment> childComments = new ArrayList<>(); //자식댓글

    /*
     * 구해요 댓글 작성
     */
    public static CrewComment addCrewComment(
            Crew crew,
            User user,
            CrewComment parentComment,
            String content
    ){

        CrewComment comment = new CrewComment();

        comment.crew = crew;
        comment.user = user;
        comment.parentComment = parentComment;
        comment.content = content;

        return comment;

    }
}
