import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <hr />
      <FooterText>Copyright Team JEJU, B210. All rights reserved.</FooterText>
      <FooterText>Designed by B210</FooterText>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  height: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  bottom: 0px;
  margin: 0 auto;
  padding-top: 100px;
  hr {
    width: 100%;
  }
`;

const FooterText = styled.div``;
