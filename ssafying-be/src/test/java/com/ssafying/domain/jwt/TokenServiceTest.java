//import com.ssafying.global.config.jwt.TokenProvider;
//import com.ssafying.global.config.jwt.entity.RefreshToken;
//import com.ssafying.global.config.jwt.service.RefreshTokenService;
//import com.ssafying.global.config.jwt.service.TokenService;
//import com.ssafying.domain.user.entity.User;
//import com.ssafying.domain.user.service.UserService;
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.when;
//
//@ExtendWith(MockitoExtension.class)
//public class TokenServiceTest {
//
//    @Mock
//    private TokenProvider tokenProvider;
//
//    @Mock
//    private UserService userService;
//
//    @Mock
//    private RefreshTokenService refreshTokenService; // Mock 객체 생성
//
//    @InjectMocks
//    private TokenService tokenService; // 생성자에 Mock 객체 주입
//
//    @Test
//    @DisplayName("토큰 재발급 테스트")
//    void createNewAccessToken() {
//        // given
//
//        User user = new User();
//        int userId = user.getId();
//
//        RefreshToken refreshToken = new RefreshToken();
//        refreshToken.setUserId(1);
//        refreshToken.setRefreshToken("refreshTokenTest");
//
//        when(tokenProvider.validToken(any())).thenReturn(true);
//        when(tokenProvider.isTokenExpired(any())).thenReturn(false);
//        when(userService.findUser(userId)).thenReturn(user);
//
//        // when
//        String newAccessToken = tokenService.createNewAccessToken(refreshToken.getRefreshToken());
//
//        // then
//        assertNotNull(newAccessToken);
//    }
//
//    @Test
//    @DisplayName("토큰 만료 테스트")
//    void isTokenExpired() {
//        // given
//        String expiredToken = "expiredToken";
//
//        when(tokenProvider.isTokenExpired(expiredToken)).thenReturn(true);
//
//        // when
//        boolean isExpired = tokenProvider.isTokenExpired(expiredToken);
//
//        // then
//        assertTrue(isExpired);
//    }
//
//    @Test
//    @DisplayName("토큰 만료로 인한 재발급 실패 테스트")
//    void createNewAccessToken_withExpiredToken_fail() {
//        // given
//        String expiredToken = "expiredToken";
//        when(tokenProvider.isTokenExpired(expiredToken)).thenReturn(true);
//
//        // when, then
//        assertThrows(RuntimeException.class, () -> tokenService.createNewAccessToken(expiredToken));
//    }
//}