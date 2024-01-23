import styled from "styled-components";

// 현재기수와 전체기수 진입시 메뉴 화면 구성 컴포넌트
function MenuBar() {
  return (
    <div>
      <MenuContainer>
        <MenuOne>
          <h2>셔틀버스 위치공유</h2>
          <hr />
          <div className="board-text">
            광역 캠퍼스만 제공, 오전 9시 전까지만 제공
          </div>
        </MenuOne>
        <MenuOne>
          <h2>식단표</h2>
          <hr />
          <div className="board-text">오점뭐</div>
        </MenuOne>
        <MenuOne>
          <h2>중고 거래 장터</h2>
          <hr />
          <div className="board-text">당신 근처의 소중한 거래</div>
        </MenuOne>
      </MenuContainer>
    </div>
  );
}

export default MenuBar;

const MenuOne = styled.div`
  border: 4px solid #8aae92;
  border-radius: 20px;
  height: 150px;
  width: 80%;
  margin: 30px 0;
  padding: 10px;
  hr {
    width: 70%;
    margin-left: 10px;
  }
  h2,
  .board-text {
    margin-left: 10px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
