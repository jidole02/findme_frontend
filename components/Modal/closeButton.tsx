import * as s from "./styles";
import { useDispatch } from "react-redux";
import { setModal } from "./../../redux/modal";

const CloseButton = () => {
  const dispatch = useDispatch();
  function close() {
    dispatch(setModal(null));
  }
  return <s.PersonalButton onClick={close}>취소</s.PersonalButton>;
};

export default CloseButton;
