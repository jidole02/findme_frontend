import { AlertPersonViewProps } from "./type";
import * as s from "../styles";
import styled from "@emotion/styled";
import CloseButton from "../closeButton";
import PersonalButton from "../../Common/Button/PersonalButton";
import PersonalText from "../../Common/Text";
import PersonalInput from "../../Common/Input";

export default function AlertPersonView({
  handleInput,
  alertPerson,
}: AlertPersonViewProps) {
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
}

const Wrapper = styled(s.Container)``;
