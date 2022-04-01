import styled from "@emotion/styled";
import * as s from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import axios from "axios";
import { person } from "./../../interfaces/person";
import { getDate } from "./../../utils/getDate";
import { setModal } from "./../../redux/modal";
import { useQuery } from "react-query";
import { Fragment } from "react";
import PersonalImage from "../Common/Image";
import PersonalText from "../Common/Text";
import PersonalButton from "../Common/Button/PersonalButton";
import CloseButton from "./closeButton";

const PersonDetail = () => {
  const person_id = useSelector((state: RootState) => state.PersonReducer.id);
  const dispatch = useDispatch();
  const { data, isLoading, error } = useQuery("getDetail", async () => {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_URL + `/missing?id=${person_id}`
    );
    return data;
  });
  const person: person = data;

  function successFind() {
    dispatch(setModal("alert"));
  }
  if (isLoading) return <h1>로딩중...</h1>;
  if (error) return <h1>에러가 발생하였습니다.</h1>;
  return (
    <Wrapper>
      {person && (
        <Fragment>
          <PersonalImage src={person.image} />
          <PersonalText color="#3184FF" css={{ marginTop: "15px" }}>
            {person.name}
          </PersonalText>
          <PersonalText
            size="small"
            weight="reguler"
            css={{ marginTop: "10px", textAlign: "center" }}
          >
            {person.description}
          </PersonalText>
          <DetailInforWrapper>
            <div>
              <PersonalText color="#AAAAAA" size="small" weight="reguler">
                실종일자
              </PersonalText>
              <PersonalText>{getDate(person.date)}</PersonalText>
            </div>
            <hr />
            <div>
              <PersonalText color="#AAAAAA" size="small" weight="reguler">
                나이
              </PersonalText>
              <PersonalText>{`${person.age}세`}</PersonalText>
            </div>
          </DetailInforWrapper>
          <PersonalButton event={successFind} css={{ marginTop: "25px" }}>
            발견 완료
          </PersonalButton>
          <CloseButton />
        </Fragment>
      )}
    </Wrapper>
  );
};

export default PersonDetail;

const Wrapper = styled(s.Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailInforWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  & div {
    width: calc(100% / 2);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  & hr {
    width: 1px;
    height: 30px;
    background: #aaaaaa;
    border: none;
  }
`;
