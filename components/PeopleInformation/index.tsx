import styled from "@emotion/styled";

export default function PeopleInformation() {
  return (
    <Wrapper>
      <img src="http://image.kmib.co.kr/online_image/2020/0122/202001220402_11170924119205_1.jpg" />
      <div className="infor">
        <h1>김팔복</h1>
        <span>서울 강남구</span>
      </div>
      <div className="distance">400m</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 15px;
  border-bottom: 1px solid #f1f1f1;
  & img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    border: 1px solid #aaaaaa;
  }
  & .infor {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    height: 50px;
    & h1 {
      font-size: 17px;
      font-weight: 500;
      padding: 0;
      margin: 0;
    }
    & span {
      font-size: 13px;
      color: #a5a5a5;
      font-weight: 400;
    }
  }
  & .distance {
    position: absolute;
    font-size: 14px;
    font-weight: 400;
    color: #84b9ff;
    right: 0;
  }
`;
