import styled from "@emotion/styled";
import CloseButton from "./closeButton";
import * as s from "./styles";

const PersonDetail = () => {
  return (
    <Wrapper>
      <img
        src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2741D544555F748B17"
        alt=""
      />
      <h1>김팔복</h1>
      <div className="detail_infor">
        <span>44세</span>
        <div className="circle" />
        <span>3일 전</span>
      </div>
      <p>빨간 잠옷을 입고 집 앞 슈퍼를 가다가 사라짐</p>
      <s.ConfirmButton>발견 완료</s.ConfirmButton>
<<<<<<< HEAD
      <CloseButton />
=======
      <s.PersonalButton>취소</s.PersonalButton>
>>>>>>> main
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
