import * as s from "./styles";
import { useDispatch } from "react-redux";
import { setId } from "./../../redux/person";

const CloseButton = () => {
  const dispatch = useDispatch();
  function close() {
    dispatch(setId(null));
  }
  return <s.PersonalButton onClick={close}>취소</s.PersonalButton>;
};

export default CloseButton;
