import styled from "@emotion/styled";
import PersonDetail from "./PersonDetail";

const Modal = () => {
  return (
    <Wrapper>
      <PersonDetail />
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
