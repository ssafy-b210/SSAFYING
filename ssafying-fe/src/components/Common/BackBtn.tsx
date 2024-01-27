import { Link } from "react-router-dom";
import backBtn from "../../assets/img/Btn/BackBtn.svg";

function BackBtn(props: { link: string }) {
  return (
    <Link to={props.link}>
      <img src={backBtn} alt="뒤로 가기" />
    </Link>
  );
}

export default BackBtn;
