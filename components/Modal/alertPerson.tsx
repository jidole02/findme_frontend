import styled from "@emotion/styled";
import CloseButton from "./closeButton";
import * as s from "./styles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setModal } from "./../../redux/modal";
import { ChangeEvent, useState } from "react";

const AlertPerson = () => {
  const person_id = useSelector((state: RootState) => state.PersonReducer.id);
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  function handleInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  function alertPerson() {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_URL}/write/alert?id=${person_id}&description=${description}`
      )
      .then((res) => {
        alert("신고해주셔서 감사합니다");
        dispatch(setModal(null));
      });
  }
  return (
    <Wrapper>
      <h1>
        본 이메일은 경찰로 전달됩니다 <br />
        작성 후 경찰로 신고해주세요
      </h1>
      <textarea
        placeholder="찾은 장소, 실종자 상태를 적어주세요"
        onChange={handleInput}
      />
      <s.ConfirmButton onClick={alertPerson}>작성 완료</s.ConfirmButton>
      <CloseButton />
    </Wrapper>
  );
};

export default AlertPerson;

const Wrapper = styled(s.Container)`
  & textarea {
    height: 150px;
  }
`;
