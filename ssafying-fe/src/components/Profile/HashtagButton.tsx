import { styled } from "styled-components";

function HashtagButton(props) {
  return (
    <StyledHashTagButton>
      <a href="#!">
        <div className="text">{props.text}</div>
      </a>
    </StyledHashTagButton>
  );
}

const StyledHashTagButton = styled.div`
  a {
    display: inline-block;
    padding: 5px 15px;
    background-color: #fff;
    border-radius: 30px;
    border: 1px solid #b6cdbd;
    box-sizing: border-box;
    color: black;
    text-decoration: none;
  }

  a:hover {
    background-color: #ddeedf;
  }
`;
export default HashtagButton;
