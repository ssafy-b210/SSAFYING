import styled from "styled-components";

// 현재기수와 전체기수 진입시 메뉴 화면 구성 컴포넌트
function MenuBar() {
  return (
    <div>
      <MenuContainer>
        <MenuOne>
          <h2>게시판</h2>
          <hr />
          <div className="board-text">자유, 취업, 개발 정보 자유롭게 공유</div>
        </MenuOne>
        <MenuOne>
          <h2>사람 구하기</h2>
          <hr />
          <div className="board-text">스터디, 프로젝트, 모임 등</div>
        </MenuOne>
        <MenuOne>
          <h2>취업공고</h2>
          <hr />
          <div className="board-text">원하는 공고만 저장</div>
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
