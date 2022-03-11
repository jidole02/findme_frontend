import styled from "@emotion/styled";
import * as s from "./styles";

const PersonDetail = () => {
  return (
    <Wrapper>
      <s.ConfirmButton>발견 완료</s.ConfirmButton>
      <s.PersonalButton>취소하기</s.PersonalButton>
    </Wrapper>
  );
};

export default PersonDetail;

const Wrapper = styled(s.Container)`
  align-items: center;
`;
