import styled from "@emotion/styled";
import CloseButton from "./closeButton";
import * as s from "./styles";

const AlertPerson = () => {
  return (
    <Wrapper>
      <h1>
        본 이메일은 경찰로 전달됩니다 <br />
        작성 후 경찰로 신고해주세요
      </h1>
      <textarea placeholder="찾은 장소, 실종자 상태를 적어주세요" />
      <s.ConfirmButton>작성 완료</s.ConfirmButton>
      <CloseButton />
    </Wrapper>
  );
};

export default AlertPerson;

const Wrapper = styled(s.Container)`
  & textarea {
    height: 150px;
  }
`;
