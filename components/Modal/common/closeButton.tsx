import { useDispatch } from "react-redux";
import { setModal } from "../../../redux/modal";
import PersonalButton from "../../Common/Button/PersonalButton";

const CloseButton = () => {
  const dispatch = useDispatch();
  function close() {
    dispatch(setModal(null));
  }
  return (
    <PersonalButton event={close} reverse={true}>
      취소
    </PersonalButton>
  );
};

export default CloseButton;
