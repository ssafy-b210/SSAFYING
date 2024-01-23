package com.ssafying.domain.user.repository;

import com.ssafying.domain.user.entity.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class UserRepository {

    private final EntityManager em;

    /*
    회원 저장
     */
    public void save(User user){
        em.persist(user);
    }

    /*
    회원 1명 조회 (id)
     */
    public User findOne(int id){
        return em.find(User.class, id);
    }

    /*
    회원 조회 (리스트)
     */
    public List<User> findAll(){
       return em.createQuery("select u from User u", User.class)
                .getResultList();
    }

    /*
    회원 조회 (이름) -> 우리는 닉네임으로 검색하기로 해서 추후에 변경할 수도..
     */
    public List<User> findByName(String name){
        return em.createQuery("select u from User u where u.name = :name", User.class)
                .setParameter("name", name).getResultList();
    }

    /*
    회원 조회 (이메일)
     */
    public List<User> findByEmail(String email){
        return em.createQuery("select u from User u where u.email = :email", User.class)
                .setParameter("email", email).getResultList();
    }

}
