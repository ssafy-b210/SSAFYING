import styled from "styled-components";
import MenuOne from "./MenuOne";

// 현재기수와 전체기수 진입시 메뉴 화면 구성 컴포넌트
function MenuBar() {
  return (
    <div>
      <MenuContainer>
        <MenuOne
          link="/board"
          title="게시판"
          text="자유, 취업, 개발 정보 자유롭게 공유해봐요!"
        ></MenuOne>
        <MenuOne
          link="/crew"
          title="사람 구하기"
          text="내가 찾는 사람이 어디있나"
        ></MenuOne>
        <MenuOne
          link="/recruit"
          title="취업공고"
          text="너 내 동료가 되라"
        ></MenuOne>
      </MenuContainer>
    </div>
  );
}

export default MenuBar;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
