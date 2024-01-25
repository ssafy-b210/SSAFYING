import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

function ContentSavedSection() {
  const tabButtons = [
    {
      type: "feed",
      text: "게시물",
      to: "",
    },
    {
      type: "board",
      text: "게시판",
      to: "board",
    },
    {
      type: "recruiting",
      text: "취업공고",
      to: "recruiting",
    },
  ];

  const [selected, setSelected] = useState<string | undefined>("feed");

  function handleClickTabButton(type: string) {
    setSelected(type);
  }

  return (
    <div>
      <StyledScrapTab>
        {tabButtons.map((item) => (
          <SavedTabLink
            key={item.type}
            to={item.to}
            onClick={() => handleClickTabButton(item.type)}
            className={selected === item.type ? "active" : ""}
          >
            {item.text}
          </SavedTabLink>
        ))}
      </StyledScrapTab>
      <Outlet />
    </div>
  );
}

export default ContentSavedSection;

const StyledScrapTab = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const SavedTabLink = styled(Link)`
  display: inline-block;
  margin: 0 16px;
  padding: 10px 16px;
  border-radius: 30px;
  text-decoration: none;
  background-color: #fff;
  color: #262626;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

  &.active {
    background-color: #616161;
    color: #fff;
  }
`;
