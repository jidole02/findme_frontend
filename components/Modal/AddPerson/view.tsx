import { AddPersonViewProps } from "./type";
import * as s from "../styles";
import styled from "@emotion/styled";
import PersonalButton from "../../Common/Button/PersonalButton/index";
import PersonalText from "../../Common/Text/index";
import PersonalInput from "../../Common/Input";
import CloseButton from "../closeButton";

export default function AddPersonView({
  handleInput,
  getFile,
  fileName,
  subData,
}: AddPersonViewProps) {
  return (
    <Wrapper>
      <PersonalText weight="bold">
        허위 작성시 <br />
        법적 재재를 받을 수 있습니다.
      </PersonalText>
      <PersonalInput
        event={handleInput}
        name="name"
        pholder="이름을 적어주세요"
        css={{ marginTop: "20px" }}
      />
      <PersonalInput
        event={handleInput}
        name="adress"
        pholder="실종 장소를 적어주세요"
      />
      <PersonalInput
        event={handleInput}
        name="age"
        type="number"
        pholder="나이를 적어주세요"
      />
      <PersonalInput
        event={handleInput}
        name="description"
        pholder="설명을 적어주세요"
        isTextArea={true}
      />
      <input type="file" id="profile" onChange={getFile} />
      <label htmlFor="profile">
        <div className="upload_wrapper">
          <div>사진 선택</div>
          <span>{fileName ? fileName : "파일이 없습니다."}</span>
        </div>
      </label>
      <PersonalButton event={subData}>작성 완료</PersonalButton>
      <CloseButton />
    </Wrapper>
  );
}

const Wrapper = styled(s.Container)`
  & h1 {
    margin-bottom: 15px;
  }
  & textarea,
  input {
    margin-top: 10px;
    margin-bottom: 0px;
  }
  & textarea {
    height: 150px;
  }
  & input[type="file"] {
    display: none;
  }
  & label {
    cursor: pointer;
  }
  & .upload_wrapper {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
    & div {
      font-size: 12px;
      font-weight: 400;
      padding: 5px 10px;
      border-radius: 3px;
      color: var(--main-color);
      background: none;
      border: 1px solid var(--main-color);
    }
    & span {
      font-size: 12px;
      font-weight: 400;
      color: #a5a5a5;
      margin-left: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 180px;
    }
  }
`;
