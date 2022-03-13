import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import PersonDetail from "./PersonDetail";

const Modal = () => {
  const person_id = useSelector((state: RootState) => state.PersonReducer.id);
  return (
    <>
      {person_id && (
        <Wrapper>
          <PersonDetail />
        </Wrapper>
      )}
    </>
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
