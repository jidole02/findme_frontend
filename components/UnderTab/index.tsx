import styled from "@emotion/styled";

const UnderTab = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <button />
      </ButtonContainer>
      <h1>
        주변 실종자 <strong>4명</strong>
      </h1>
    </Wrapper>
  );
};

export default UnderTab;

const Wrapper = styled.div`
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  background-color: white;
  height: 90px;
  position: absolute;
  z-index: 5;
  bottom: 0;
  padding: 0px 30px;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.1);
  & h1 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 25px;
    & strong {
      color: var(--main-color);
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  & button {
    width: 70px;
    height: 5px;
    background-color: #dedede;
    border-radius: 24px;
  }
`;
