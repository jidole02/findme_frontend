import styled from "@emotion/styled";
import CloseButton from "./closeButton";
import * as s from "./styles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setModal } from "./../../redux/modal";
import { ChangeEvent, useState } from "react";
import PersonalButton from "../Common/Button/PersonalButton";
import PersonalText from "../Common/Text";
import PersonalInput from "../Common/Input";

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
      <PersonalText weight="bold">
        본 메일은 경찰로 전달됩니다. <br />
        작성 후 경찰에 신고해주세요!
      </PersonalText>
      <PersonalInput
        isTextArea={true}
        pholder="발견 당시 상태를 적어주세요."
        css={{ marginTop: "20px" }}
        event={handleInput}
      />
      <PersonalButton event={alertPerson} css={{ marginTop: "20px" }}>
        작성 완료
      </PersonalButton>
      <CloseButton />
    </Wrapper>
  );
};

export default AlertPerson;

const Wrapper = styled(s.Container)``;
