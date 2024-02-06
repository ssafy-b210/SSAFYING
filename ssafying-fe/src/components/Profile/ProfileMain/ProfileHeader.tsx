import styled from "styled-components";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store";

function ProfileHeader() {
  const user = useAppSelector((state: RootState) => state.user);

  return (
    <StyledProfileHeader>
      <div>{user.userId}</div>
    </StyledProfileHeader>
  );
}

export default ProfileHeader;

const StyledProfileHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #9a9a9a;
`;
