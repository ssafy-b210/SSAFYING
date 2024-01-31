import styled from "styled-components";
import MenuOne from "../../All/Board/BoardMenu/MenuOne";

// 현재기수와 전체기수 진입시 메뉴 화면 구성 컴포넌트
function MenuBar() {
  return (
    <div>
      <MenuContainer>
        <MenuOne
          link="/"
          title="셔틀버스 위치공유"
          text="광역 캠퍼스만 제공, 오전 9시 전까지만 제공"
        ></MenuOne>
        <MenuOne link="/mealplan" title="식단표" text="오점뭐?"></MenuOne>
        <MenuOne
          link="/market"
          title="중고 거래 장터"
          text="당신 근처의 소중한 거래"
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
