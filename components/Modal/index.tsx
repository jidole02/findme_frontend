import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
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
          ) : (
            ""
          )}
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
