import styled from "@emotion/styled";
import CloseButton from "./closeButton";
import * as s from "./styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import axiox from "axios";
import { person } from "./../../interfaces/person";
import { getDate } from "./../../utils/getDate";
import { setModal } from "./../../redux/modal";

const PersonDetail = () => {
  const person_id = useSelector((state: RootState) => state.PersonReducer.id);
  const [person, setPerson] = useState<person>();
  const dispatch = useDispatch();

  async function getDetail() {
    const res = await axiox.get(
      process.env.NEXT_PUBLIC_URL + `/missing?id=${person_id}`
    );
    setPerson(res.data);
  }

  function successFind() {
    dispatch(setModal("alert"));
  }

  useEffect(() => {
    getDetail();
  }, []);
  console.log(person);
  return (
    <Wrapper>
      {person && (
        <>
          <img src={person.image} />
          <h1>{person.name}</h1>
          <div className="detail_infor">
            <span>{person.age}세</span>
            <div className="circle" />
            <span>{getDate(person.date)}</span>
            <p>{person.description}</p>
          </div>
          <p>{person.description}</p>
          <s.ConfirmButton onClick={successFind}>발견 완료</s.ConfirmButton>
          <CloseButton />
        </>
      )}
    </Wrapper>
  );
};

export default PersonDetail;

const Wrapper = styled(s.Container)`
  align-items: center;
  & img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  & h1 {
    margin-top: 15px;
    font-size: 20px;
  }
  & .detail_infor {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 5px;
    & span {
      color: #dedede;
      font-size: 14px;
      font-weight: 500;
    }
    & .circle {
      width: 5px;
      height: 5px;
      background-color: #dedede;
      border-radius: 50%;
    }
  }
  & p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 25px;
    margin-top: 20px;
    color: white;
  }
`;
