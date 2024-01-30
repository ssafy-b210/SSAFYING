import styled from "styled-components";
import BackBtn from "./BackBtn";

type HeaderProps = {
  backLink: string;
  text?: string;
  htext?: JSX.Element;
  isCenter: boolean;
  extraBtn?: JSX.Element;
};

function BackBtnHeader(props: HeaderProps) {
  return (
    <Wrapper $isCenter={props.isCenter}>
      <div className="btnWrapper">
        <BackBtn link={props.backLink} />
      </div>
      <div className="contentWrapper">
        {props.text ? props.text : props.htext}
      </div>
      <div className="btnWrapper">{props.extraBtn ? props.extraBtn : null}</div>
    </Wrapper>
  );
}

export default BackBtnHeader;

const Wrapper = styled.div<{ $isCenter: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: 0 10px;
  box-sizing: border-box;

  .btnWrapper {
    display: flex;
    flex-basis: 32px;
    align-items: center;
  }

  .contentWrapper {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    font-size: 100%;
    text-align: ${(props) => (props.$isCenter ? "center" : "left")};
  }
`;
