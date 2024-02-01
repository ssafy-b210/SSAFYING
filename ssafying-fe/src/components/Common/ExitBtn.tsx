import { Link } from "react-router-dom";
import exitIcon from "../../assets/img/imgBtn/exit.svg";

function ExitBtn(props: { link: string }) {
  return (
    <Link to={props.link}>
      <img src={exitIcon} alt="나기기" />
    </Link>
  );
}

export default ExitBtn;
