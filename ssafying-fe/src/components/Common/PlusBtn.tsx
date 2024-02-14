import { Link } from "react-router-dom";
import plusBtn from "../../assets/img/imgBtn/add.svg";
import styled from "styled-components";

// PlusBtn 컴포넌트
function PlusBtn(props: { link?: string; onClick?: () => void }) {
  return (
    <Wrapper>
      <div onClick={props.onClick}>
        {props.link ? (
          <Link to={props.link}>
            <img src={plusBtn} alt="추가" />
          </Link>
        ) : (
          <img src={plusBtn} alt="추가" />
        )}
      </div>
    </Wrapper>
  );
}

export default PlusBtn;

const Wrapper = styled.div`
  cursor: pointer;
`;
