import styled from "styled-components";

const CustomDate = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <div>
      <Dday>{formattedDate}</Dday>
    </div>
  );
};

export default CustomDate;

const Dday = styled.div``;
