import { Link } from "react-router-dom";
import backBtn from "../../../assets/img/Btn/BackBtn.svg";
import styled from "styled-components";

interface HeaderProps {
  text: string;
}

function FollowHeader({ text }: HeaderProps) {
  return (
    <StyledFollowHeader>
      <Link to="/profile" className="backBtn">
        <img src={backBtn} alt="" />
      </Link>
      <div>{text}</div>
    </StyledFollowHeader>
  );
}

export default FollowHeader;

const StyledFollowHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 10px;

  .backBtn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    padding: 0 10px;
  }
`;
