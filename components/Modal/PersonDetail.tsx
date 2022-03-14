import styled from "@emotion/styled";
import CloseButton from "./closeButton";
import * as s from "./styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import axiox from "axios";
import { person } from "./../../interfaces/person";
import { getDate } from "./../../utils/getDate";

const PersonDetail = () => {
  const person_id = useSelector((state: RootState) => state.PersonReducer.id);
  const [person, setPerson] = useState<person>();

  async function getDetail() {
    const res = await axiox.get(
      process.env.NEXT_PUBLIC_URL + `/missing?id=${person_id}`
    );
    setPerson(res.data);
  }

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <Wrapper>
      {person && (
        <>
          <img
            src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2741D544555F748B17"
            alt=""
          />
          <h1>{person.name}</h1>
          <div className="detail_infor">
            <span>{person.age}세</span>
            <div className="circle" />
            <span>{getDate(person.date)}</span>
          </div>
          <p>{person.description}</p>
          <s.ConfirmButton>발견 완료</s.ConfirmButton>
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
  }
`;
