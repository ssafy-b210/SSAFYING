import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import userImg from "../../../assets/img/user.svg";
import userImg2 from "../../../assets/img/user2.svg";

const Img = styled.img`
  width: 100%;
  height: auto;
`;

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
        <Img src={userImg} alt="User 3" />
      </div>
    </Carousel>
  );
}

export default FeedListItemImg;
