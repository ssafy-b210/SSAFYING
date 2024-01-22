import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import userImg from "../../../assets/img/testImg/user5.svg";
import userImg2 from "../../../assets/img/testImg/user4.svg";
import userImg3 from "../../../assets/img/testImg/user3.svg";

function FeedListItemImg() {
  return (
    <Carousel showArrows showThumbs={false}>
      <div>
        <Img src={userImg} alt="User 1" />
      </div>
      <div>
        <Img src={userImg2} alt="User 2" />
      </div>
      <div>
        <Img src={userImg3} alt="User 3" />
      </div>
    </Carousel>
  );
}

export default FeedListItemImg;

const Img = styled.img`
  width: 100%;
  margin: 5px auto;
  border-radius: 5px;
  height: auto;
`;
