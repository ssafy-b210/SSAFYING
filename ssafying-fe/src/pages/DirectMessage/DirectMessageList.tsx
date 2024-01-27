import BackBtnHeader from "../../components/Common/BackBtnHeader";

function DirectMessage() {
  const userName = "aeong123";

  return (
    <div>
      <BackBtnHeader backLink="/" text={userName} isCenter={true} />
    </div>
  );
}

export default DirectMessage;
