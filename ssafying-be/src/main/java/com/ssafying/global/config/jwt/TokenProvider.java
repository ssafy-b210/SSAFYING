package com.ssafying.global.config.jwt;

import com.ssafying.domain.user.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.Duration;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class TokenProvider {

    private final JwtProperties jwtProperties;

    private final Duration REFRESH_TOKEN_EXPIRES = Duration.ofDays(7); // 7일

    public Map<String, String> generateToken(User user, Duration expiredAt){
        Date now = new Date();
        return makeToken(new Date(now.getTime() + expiredAt.toMillis()), user);
    }

    // JWT 토큰 생성 메소드
    private Map<String, String> makeToken(Date expiry, User user){
        Date now = new Date();

        String accessToken =  Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE) // 헤더 type : JWT
                .setIssuer(jwtProperties.getIssuer()) //이슈 발급자
                .setIssuedAt(now) // 내용 iat : 현재 시간
                .setExpiration(expiry) // 내용 exp : expiry 멤버 변수값
                .setSubject(user.getEmail()) // 내용 sub : 유저의 이메일
                .claim("id", user.getId()) // 클레임 id : 유저 ID
                // 서명 : 비밀값과 함께 해시값을 HS256 방식으로 암호화
                .signWith(SignatureAlgorithm.HS256, jwtProperties.getSecretKey())
                .compact();

        //Refresh Token
        String refreshToken =  Jwts.builder()
                .setClaims(getClaims(accessToken)) // 정보 저장
                .setIssuedAt(now) // 토큰 발행 시간 정보
                .setExpiration(new Date(now.getTime() + REFRESH_TOKEN_EXPIRES.toMillis()))
                .signWith(SignatureAlgorithm.HS256, jwtProperties.getSecretKey())  // 사용할 암호화 알고리즘과
                // signature 에 들어갈 secret값 세팅
                .compact();

        // Map에 토큰들을 담아 반환
        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", accessToken);
        tokens.put("refreshToken", refreshToken);

        return tokens;

    }

    // JWT 토큰 유효성 검증 메소드
    public boolean validToken(String token){
        System.out.println("유효성 검증 메서드 진입");
        System.out.println("issuer = " + jwtProperties.getIssuer());
        System.out.println("secretkey = " + jwtProperties.getSecretKey());
        try{
            Jwts.parser()
                    .setSigningKey(jwtProperties.getSecretKey()) // 복호화
                    .parseClaimsJws(token);

            return true;

        }catch (Exception e){ // 복호화 과정에서 에러가 나면 유효하지 않은 토큰임
            System.out.println("복호화 실패");
            return false;
        }
    }

    // 토큰 기반으로 유저 ID를 가져오는 메소드
    public int getUserId(String token) {
        Claims claims = getClaims(token);

        System.out.println("/////////////////////////////////");
        System.out.println("토큰으로 가져온 userId");
        System.out.println(claims.get("id", Integer.class));
        System.out.println("/////////////////////////////////");

        return claims.get("id", Integer.class);
    }

    // 클레임 조회
    private Claims getClaims(String token){
        return Jwts.parser()
                .setSigningKey(jwtProperties.getSecretKey())
                .parseClaimsJws(token)
                .getBody();
    }

    // 토큰 만료 여부 확인
    public boolean isTokenExpired(String token) {
        Claims claims = getClaims(token);

        System.out.println("////////////////////////////////////////////");
        Date expiration = claims.get("exp", Date.class);
        System.out.println(expiration);
        String data = claims.get("data", String.class);
        System.out.println(data);
        System.out.println("////////////////////////////////////////////");

        return claims.getExpiration().before(new Date());

    }


}