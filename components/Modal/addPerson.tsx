import styled from "@emotion/styled";
import CloseButton from "./closeButton";
import * as s from "./styles";
import { getFileData } from "./../../utils/getFileData";
import { FormEvent, useEffect, useState } from "react";

const AddPerson = () => {
  const [fileName, setFileName] = useState("");
  const [data, setData] = useState({
    name: "",
    adress: "",
    age: 0,
    description: "",
  });

  function getFile(event) {
    getFileData(event).then((res) => {
      setFileName(res.file.name);
    });
    const gecoder = new window.kakao.maps.services.Geocoder();
    console.log(gecoder);
  }

  function handleInput(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setData({
      ...data,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }
  return (
    <Wrapper>
      <h1>
        허위 작성시 <br />
        법적 재재를 받을 수 있습니다.
      </h1>
      <input
        onChange={handleInput}
        type="text"
        placeholder="이름을 적어주세요"
        name="name"
      />
      <input
        onChange={handleInput}
        type="text"
        placeholder="실종 장소를 적어주세요"
        name="adress"
      />
      <input
        onChange={handleInput}
        type="number"
        min="0"
        placeholder="나이를 적어주세요"
        name="age"
      />
      <textarea
        onChange={handleInput}
        placeholder="설명을 적어주세요"
        name="description"
      />
      <input type="file" id="profile" onChange={getFile} />
      <label htmlFor="profile">
        <div className="upload_wrapper">
          <div>사진 선택</div>
          <span>{fileName ? fileName : "파일이 없습니다."}</span>
        </div>
      </label>
      <s.ConfirmButton>작성 완료</s.ConfirmButton>
      <CloseButton />
    </Wrapper>
  );
};

export default AddPerson;

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
      font-size: 14px;
      padding: 5px 10px;
      border-radius: 3px;
      color: white;
      background: #4d63ef;
    }
    & span {
      font-size: 14px;
      font-weight: 500;
      color: #a5a5a5;
      margin-left: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 180px;
    }
  }
`;
