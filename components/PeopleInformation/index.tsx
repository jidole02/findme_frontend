import styled from "@emotion/styled";
import { person } from "./../../interfaces/person";
import { useDispatch } from "react-redux";
import { setId } from "./../../redux/person";
import { setModal } from "./../../redux/modal";

interface props {
  person: person;
  distance: any;
}

export default function PeopleInformation({ person, distance }: props) {
  const dispatch = useDispatch();

  function showDetail() {
    dispatch(setId(person._id));
    dispatch(setModal("personDetail"));
  }
  return (
    <Wrapper onClick={showDetail}>
      <img src={person.image} />
      <div className="infor">
        <h1>{person.name}</h1>
        <span>{person.adress}</span>
      </div>
      <div className="distance">{distance.toFixed(2)}km</div>
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
  cursor: pointer;
  margin-top: 15px;
  & img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    border: 1px solid #d1d1d1;
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
