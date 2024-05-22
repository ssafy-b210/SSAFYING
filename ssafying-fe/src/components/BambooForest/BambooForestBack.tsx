import styled, { keyframes } from "styled-components";

const starFieldWidth = 2560;
const starFieldHeight = 2560;
const starStartOffset = "600px";

const starOneScrollDuration = "100s";
const starTwoScrollDuration = "125s";
const starThreeScrollDuration = "175s";
const numStarOneStars = 1700;
const numStarTwoStars = 700;
const numStarThreeStars = 200;

const Container = styled.div`
  display: block;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #020107 0%, #201b46 100%);
`;

const createStars = (n: number) => {
  let stars = "";
  for (let i = 0; i < n; i++) {
    stars += `${Math.floor(Math.random() * starFieldWidth)}px ${Math.floor(
      Math.random() * starFieldHeight
    )}px #FFF`;
    if (i < n - 1) stars += ", ";
  }
  return stars;
};

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-${starFieldHeight}px) translateX(-${starFieldWidth}px);
  }
`;

const animShootingStar = keyframes`
  from {
    transform: translateY(0px) translateX(0px) rotate(-45deg);
    opacity: 1;
    height: 5px;
  }
  to {
    transform: translateY(-${starFieldHeight}px) translateX(-${starFieldWidth}px) rotate(-45deg);
    opacity: 1;
    height: 800px;
  }
`;

const Star = styled.div`
  z-index: 10;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background: transparent;
  box-shadow: ${() => createStars(numStarOneStars)};
  animation: ${animStar} ${starOneScrollDuration} linear infinite;

  &:after {
    content: " ";
    top: -${starStartOffset};
    width: 1px;
    height: 1px;
    border-radius: 50%;
    position: absolute;
    background: transparent;
    box-shadow: ${() => createStars(numStarOneStars)};
  }
`;

const Stars1 = styled(Star)`
  width: 2px;
  height: 2px;
  box-shadow: ${() => createStars(numStarTwoStars)};
  animation: ${animStar} ${starTwoScrollDuration} linear infinite;
`;

const Stars2 = styled(Star)`
  width: 3px;
  height: 3px;
  box-shadow: ${() => createStars(numStarThreeStars)};
  animation: ${animStar} ${starThreeScrollDuration} linear infinite;
`;

const ShootingStar = styled.div`
  z-index: 10;
  width: 5px;
  height: 85px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  animation: ${animShootingStar} 10s linear infinite;
`;

interface bambooProps {
  children: React.ReactNode;
}

const BambooForestBack = ({ children }: bambooProps) => (
  <Container>
    <Star className="stars" />
    <Stars1 className="stars1" />
    <Stars2 className="stars2" />
    <ShootingStar className="shooting-stars" />
    {children}
  </Container>
);

export default BambooForestBack;
