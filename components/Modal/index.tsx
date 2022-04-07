import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import AddPerson from "./AddPerson";
import AlertPerson from "./alertPerson";
import PersonDetail from "./PersonDetail";

const Modal = () => {
  const modal_type = useSelector(
    (state: RootState) => state.ModalReducer.modalType
  );
  return (
    <>
      {modal_type && (
        <Wrapper>
          {modal_type === "personDetail" ? (
            <PersonDetail />
          ) : modal_type === "alert" ? (
            <AlertPerson />
          ) : modal_type === "addPerson" ? (
            <AddPerson />
          ) : (
            ""
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Modal;

const showAnime = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1
}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${showAnime} 0.5s;
`;
