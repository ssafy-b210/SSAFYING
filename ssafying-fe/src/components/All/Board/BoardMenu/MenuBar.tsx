import styled from "styled-components";

import { Link } from "react-router-dom";

import Crew from "../../../../assets/img/MenuIcon/Crew.svg";
import Board from "../../../../assets/img/MenuIcon/Board.svg";

import Recruitment from "../../../../assets/img/MenuIcon/Recruitment.svg";

// 현재기수와 전체기수 진입시 메뉴 화면 구성 컴포넌트
function MenuBar() {
  return (
    <MenuContainer>
      <Content>
        <Link to={"/board"}>
          <Card>
            <Icon>
              <img src={Board} />
            </Icon>
            <Title>게시판</Title>
            <Text>자유, 취업, 개발 정보 자유롭게 공유해봐요!</Text>
          </Card>
        </Link>
        <Link to={"/crew"}>
          <Card>
            <Icon>
              <img src={Crew} />
            </Icon>
            <Title>사람 구하기</Title>
            <Text>내가 찾는 사람이 어디있나</Text>
          </Card>
        </Link>
        <Link to={"/recruit"}>
          <Card>
            <Icon>
              <img src={Recruitment} />
            </Icon>
            <Title>취업공고</Title>
            <Text>너 내 동료가 되라</Text>
          </Card>
        </Link>
      </Content>
    </MenuContainer>
  );
}

export default MenuBar;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const Text = styled.p`
  width: 90%;
  margin: 10px auto;
  font-size: 13px;
  text-align: center;
  margin-top: 10px;
  color: black;
  font-weight: 400;
  opacity: 0;
  max-height: 0;
  transition: all 0.3s ease;
`;

const Card = styled.div`
  width: 280px;
  height: 138px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0 20px;
  padding-top: 20px;

  &:hover {
    height: 180px;

    ${Text} {
      transition: all 0.3s ease;
      opacity: 1;
      max-height: 40px;
    }
  }
`;
const Icon = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80px;
  width: 80px;
  background: linear-gradient(
    120deg,
    #ffc0cb 5%,
    #ff8e99 30%,
    rgba(0, 0, 0, 0.28) 60%
  );
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.8s ease;
  background-position: 0px;
  background-size: 200px;
  img {
    width: 30px;
    height: auto;
  }
`;
const Title = styled.p`
  width: 100%;
  margin: 10px;
  text-align: center;
  color: #4b4b4b;
  font-weight: 600;
  text-transform: uppercase;
`;
