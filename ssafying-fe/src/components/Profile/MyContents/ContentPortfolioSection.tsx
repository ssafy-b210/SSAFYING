import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  modifyPortfolioReadMe,
  selectPortfolioReadMe,
} from "../../../apis/api/Profile";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";
import { useParams } from "react-router-dom";

function ContentPortfolioSection() {
  const [mdValue, setMdValue] = useState<string | undefined>("");
  const [isModified, setIsModified] = useState<Boolean | undefined>(false);
  const [isPreview, setIsPreview] = useState(false);

  const user = useAppSelector(selectUser);
  const profileUserId = useParams().userId;

  // 리드미 수정하기
  function modifyReadme() {
    modifyPortfolioReadMe(user.userId, mdValue);
    setIsModified(false);
  }

  // 리드미 조회
  async function getReadme() {
    const res = await selectPortfolioReadMe(user.userId);
    setMdValue(res.readme);
  }

  function handleClickModifyButton() {
    if (user.userId === Number(profileUserId)) setIsModified(true);
    else alert("수정할 권한이 없습니다.");
  }

  useEffect(() => {
    getReadme();
  }, []);

  return (
    <div>
      <ButtonWrapper className="reverse">
        {isModified ? (
          <div>
            <Button
              className="danger"
              onClick={() => {
                if (window.confirm("글 작성을 취소하시겠습니까?")) {
                  setIsModified(false);
                }
              }}
            >
              취소
            </Button>
            <Button className="success" onClick={modifyReadme}>
              완료
            </Button>
          </div>
        ) : (
          <>
            {user.userId === Number(profileUserId) && (
              <Button onClick={handleClickModifyButton}>글 수정</Button>
            )}
          </>
        )}
      </ButtonWrapper>
      <MarkdownContainer>
        {isModified ? (
          <div>
            <ButtonWrapper>
              <ToggleButton
                className={isPreview ? "" : "inactive"}
                onClick={() => setIsPreview(false)}
              >
                Edit
              </ToggleButton>
              <ToggleButton
                className={isPreview ? "inactive" : ""}
                onClick={() => setIsPreview(true)}
              >
                Preview
              </ToggleButton>
            </ButtonWrapper>
            <MDEditor
              value={mdValue}
              onChange={setMdValue}
              preview={isPreview ? "preview" : "edit"}
              height={400}
              visibleDragbar={false}
              hideToolbar={true}
            />
          </div>
        ) : (
          <MDEditor.Markdown source={mdValue} className="viewer" />
        )}
      </MarkdownContainer>
    </div>
  );
}

export default ContentPortfolioSection;

const ButtonWrapper = styled.div`
  display: flex;
  padding-bottom: 10px;

  &.reverse {
    justify-content: flex-end;
  }
`;

const MarkdownContainer = styled.div`
  padding: 20px 26px;
  border: 1px solid #d0d7de;
  border-radius: 4px;
  background-color: #fff;
  white-space: break-spaces;
  word-wrap: break-word;

  .viewer {
    height: 400px;
  }
`;

const Button = styled.button`
  margin-left: 16px;
  padding: 8px 24px;
  font-size: 14px;
  color: #000;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;

  &.danger {
    color: #fff;
    border: none;
    background-color: #ff4a4a;
  }

  &.success {
    color: #fff;
    border: none;
    background-color: #8aae92;
  }
`;
const ToggleButton = styled(Button)`
  margin: 0;
  padding: 8px 16px;

  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
  }

  &.inactive {
    color: #000;
    border: 1px solid #d8d8d8;
    background-color: #fff;
  }

  & {
    color: #262626;
    border: 1px solid #d8d8d8;
    background-color: #d8d8d8;
  }
`;
