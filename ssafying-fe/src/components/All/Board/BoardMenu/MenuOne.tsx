import { Link } from "react-router-dom";
import styled from "styled-components";

function MenuOne(props: { link: string; text: string; title: string }) {
  return (
    <Wrapper>
      <Link to={props.link}>
        <SelectMenu>
          <h2>{props.title}</h2>
          <hr />
          <div className="board-text">{props.text}</div>
        </SelectMenu>
      </Link>
    </Wrapper>
  );
}

export default MenuOne;

const Wrapper = styled.div`
  a {
    text-decoration: none;
  }
`;

const SelectMenu = styled.div`
  border: none;
  border-radius: 20px;
  height: 150px;
  width: 400px;
  margin: 30px 0;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  hr {
    width: 70%;
    margin-left: 10px;
  }
  h2,
  .board-text {
    color: #4b4b4b;
    margin-left: 10px;
  }
  &:hover {
    background-color: #ffe0ee;
    color: white;
  }
`;
