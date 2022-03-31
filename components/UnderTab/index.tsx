import styled from "@emotion/styled";
import { person } from "./../../interfaces/person";
import PersonList from "./../Common/PersonList/index";

interface props {
  data: person[];
  myX: number;
  myY: number;
}

const UnderTab = ({ data, myX, myY }: props) => {
  return (
    <Wrapper>
      <PersonList personList={data} myX={myX} myY={myY} />
    </Wrapper>
  );
};

export default UnderTab;

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px 20px 0px 0px;
  background-color: white;
  overflow-y: scroll;
  padding: 25px;
  position: absolute;
  bottom: 0;
  z-index: 3;
`;
