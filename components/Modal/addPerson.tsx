import styled from "@emotion/styled";
import CloseButton from "./closeButton";
import * as s from "./styles";
import { getFileData } from "./../../utils/getFileData";
import { FormEvent, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setModal } from "./../../redux/modal";
import PersonalButton from "./../Common/Button/PersonalButton/index";
import PersonalText from "./../Common/Text/index";
import PersonalInput from "../Common/Input";

const AddPerson = () => {
  const [fileName, setFileName] = useState("");
  const [data, setData] = useState({
    name: "",
    adress: "",
    age: 0,
    description: "",
  });
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  function getFile(event) {
    getFileData(event).then((res) => {
      setFileName(res.file.name);
      const fd = new FormData();
      fd.append("file", res.file);
      axios
        .post(`${process.env.NEXT_PUBLIC_URL}/image/upload`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          setImageUrl(`${process.env.NEXT_PUBLIC_URL}${res.data.url}`);
        });
    });
  }

  function handleInput(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setData({
      ...data,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function subData() {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.adress, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        axios
          .post(`${process.env.NEXT_PUBLIC_URL}/write/regist`, {
            name: data.name,
            age: data.age,
            adress: data.adress,
            x: result[0].y,
            y: result[0].x,
            image: imageUrl,
            description: data.description,
          })
          .then((res) => {
            dispatch(setModal(null));
            alert("등록되었습니다.");
          });
      }
    });
  }
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
