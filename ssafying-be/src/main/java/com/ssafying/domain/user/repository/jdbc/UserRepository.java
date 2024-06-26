package com.ssafying.domain.user.repository.jdbc;

import com.ssafying.domain.shuttle.entity.Campus;
import com.ssafying.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    /*
     * 유효성 검사 - 이메일, 닉네임
     * 중복되는 경우 true
     */
    boolean existsByEmail(String email);
    boolean existsByNickname(String nickname);

    Optional<User> findByEmail(String email);
    Optional<User> findByPassword(String password);

    /*
     * 추천친구
     */

    //campus, generation, isMajor 필터링
    @Query("select u from User u where u.campus = :campus and u.generation = :generation and u.isMajor = :isMajor")
    List<User> findByCampusAndGenerationAndIsMajor(@Param("campus") Campus campus,
                                                   @Param("generation") int generation,
                                                   @Param("isMajor") int isMajor);


    //campus, generation 필터링
    @Query("select u from User u where u.campus = :campus and u.generation = :generation")
    List<User> findByCampusAndGeneration(@Param("campus") Campus campus,
                                         @Param("generation") int generation);

    //campus, isMajor 필터링
    @Query("select u from User u where u.campus = :campus and u.isMajor = :isMajor")
    List<User> findByCampusAndIsMajor(@Param("campus") Campus campus,
                                      @Param("isMajor") int isMajor);

    //generation, isMajor 필터링
    @Query("select u from User u where u.generation = :generation and u.isMajor = :isMajor")
    List<User> findByGenerationAndIsMajor(@Param("generation") int generation,
                                      @Param("isMajor") int isMajor);



    //닉네임으로 검색
    @Query("select u from User u where u.nickname like :nickname")
    List<User> findByNickname(@Param("nickname") String nickname);

}
