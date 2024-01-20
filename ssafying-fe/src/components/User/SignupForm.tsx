import styled from "styled-components";
import backarrow from "../../assets/img/backarrow.svg";
<<<<<<< HEAD
=======
import ToggleBtn from "./ToggleBtn";
>>>>>>> 6527e64e722567336e2c6ecc88f56c504ce6608a

function SignUpForm() {
  return (
    <div>
      <Header>
        <img src={backarrow} />
<<<<<<< HEAD
      </Header>
      <Form>
        <h1>회원가입</h1>
        <div>
          <div>이름을 입력하세요</div>
          <input type="text" />
        </div>
        <div>
          <div>닉네임을 입력하세요</div>
          <input type="text" />
        </div>
        <div>
          <div>이메일을 입력하세요</div>
          <input type="email"></input>
        </div>
        <div>
          <div>비밀번호를 입력하세요</div>
          <input type="password" />
        </div>
        <div>
          <div>비밀번호를 다시 입력하세요</div>
          <input type="password" />
        </div>
        <div>
          <div>전화번호를 입력하세요</div>
          <input type="text" />
        </div>
        <div>
          <span>생일</span>
          <select id="birth-year">
            <option disabled selected>
              출생 연도
            </option>
          </select>
          <select id="birth-month">
            <option disabled selected>
              월
            </option>
          </select>
          <select id="birth-day">
            <option disabled selected>
              일
            </option>
          </select>
        </div>
        <span>캠퍼스</span>
        <select>
          <option>서울</option>
          <option>대전</option>
          <option>구미</option>
          <option>광주</option>
          <option>부울경</option>
        </select>
        <span>기수</span>
        <input type="number" />
        <br />
        <input type="radio" name="isMajor" />
        전공자
        <input type="radio" name="isMajor" />
        비전공자
      </Form>
      <button>관심태그 선택하러 가기</button>
=======
        <h2>회원가입</h2>
      </Header>
      <Form>
        <SignUpInput className="input-area">
          <input type="text" id="name" placeholder=" " />
          <label htmlFor="name">이름을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="text" id="nickname" placeholder=" " />
          <label htmlFor="nickname">닉네임을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="email" id="email" placeholder=" " />
          <label htmlFor="email">이메일을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="password" id="password" placeholder=" " />
          <label htmlFor="password">비밀번호을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="password" id="password" placeholder=" " />
          <label htmlFor="password">비밀번호를 다시 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="tel" id="tel" placeholder=" " />
          <label htmlFor="tel">전화번호를 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="date" id="birthday" placeholder=" " />
          <label htmlFor="birthday">생년월일을 입력해주세요</label>
        </SignUpInput>
        <SignUpInput className="input-area">
          <input type="number" id="level" placeholder=" " />
          <label htmlFor="level">기수</label>
        </SignUpInput>
        <SignUpInput>
          <ToggleBtn></ToggleBtn>
        </SignUpInput>
      </Form>

      <SubmitButton type="submit" value="회원가입하러가기"></SubmitButton>
>>>>>>> 6527e64e722567336e2c6ecc88f56c504ce6608a
    </div>
  );
}
export default SignUpForm;

const Header = styled.header`
  display: flex;
  align-items: center;
<<<<<<< HEAD

=======
  text-align: center;
>>>>>>> 6527e64e722567336e2c6ecc88f56c504ce6608a
  img {
    height: 30px;
    margin-right: 10px;
    margin-top: 30px;
  }
<<<<<<< HEAD
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
=======
  h2 {
    margin: 0;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: realtive;
`;
const SignUpInput = styled.div`
  position: relative;
  margin-top: 1.5em;
  margin-bottom: 1em;
  .input-area {
    width: 70%;
    position: relative;
    font-size: 18px;
    margin-top: 20px;
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 2px solid #ddd;
    outline: none;
    min-width: 60vmin;
    font-size: 18px;
    padding-bottom: 5px;
  }
  label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    transition: transform 0.3s ease-out;
  }
  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translateY(-150%);
  }
`;
const SubmitButton = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #b6cdbd;
  border: none;
  color: white;
>>>>>>> 6527e64e722567336e2c6ecc88f56c504ce6608a
`;
