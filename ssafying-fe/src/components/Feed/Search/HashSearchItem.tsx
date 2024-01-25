import styled from "styled-components";
import hashSearch from "../../../assets/img/imgBtn/hashSearch.svg";
import RoundImg from "../utils/RoundImg";

interface hashProps {
  hashTag: string;
}

function HashSearchItem({ hashTag }: hashProps) {
  return (
    <UserWrapper>
      <RoundImg src={hashSearch} size="30px" />
      <UserId>#{hashTag}</UserId>
    </UserWrapper>
  );
}

export default HashSearchItem;

const UserWrapper = styled.div`
  padding: 10px 5px;
  display: flex;
  align-items: center;
`;

const UserId = styled.span`
  margin-left: 5px; // Adjust the margin as needed
  font-weight: 500;
  font-size: 14px;
`;
