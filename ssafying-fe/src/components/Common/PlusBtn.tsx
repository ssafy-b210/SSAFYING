import { Link } from "react-router-dom";
import plusBtn from "../../assets/img/imgBtn/add.svg";

// PlusBtn 컴포넌트
function PlusBtn(props: { link: string }) {
  return (
    <Link to={props.link}>
      <img src={plusBtn} alt="추가" />
    </Link>
  );
}

export default PlusBtn;
