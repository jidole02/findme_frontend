import styled from "@emotion/styled";
import CloseButton from "./closeButton";
import * as s from "./styles";

const AddPerson = () => {
  return (
    <Wrapper>
      <h1>
        허위 작성시 <br />
        법적 재재를 받을 수 있습니다.
      </h1>
      <input type="text" placeholder="이름을 적어주세요" />
      <input type="text" placeholder="실종 장소를 적어주세요" />
      <input type="text" placeholder="나이를 적어주세요" />
      <textarea placeholder="설명을 적어주세요" />
      <s.ConfirmButton>작성 완료</s.ConfirmButton>
      <CloseButton />
    </Wrapper>
  );
};

export default AddPerson;

const Wrapper = styled(s.Container)`
  & h1 {
    margin-bottom: 15px;
  }
  & textarea,
  input {
    margin-top: 10px;
    margin-bottom: 0px;
  }
  & textarea {
    margin-bottom: 20px;
    height: 150px;
  }
`;
