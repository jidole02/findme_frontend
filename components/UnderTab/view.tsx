import { DistanceArr } from "./distanceArr";
import { UnderTabViewProps } from "./type";
import styled from "@emotion/styled";
import PersonList from "./../Common/PersonList/index";

export default function UnderTabView({
  selectDistance,
  setSelectDistance,
  data,
}: UnderTabViewProps) {
  return (
    <Wrapper>
      <ButtonWrapper>
        {DistanceArr.map((_, index) => (
          <button
            key={index}
            style={
              selectDistance === _.distance
                ? { color: "white", background: "#3184FF" }
                : {}
            }
            onClick={() => setSelectDistance(_.distance)}
          >
            {index !== 0 ? `반경 ${_.distanceToString}` : _.distanceToString}
          </button>
        ))}
      </ButtonWrapper>
      <RelativeWrapper>
        <ListWrapper>
          <PersonList personList={data} />
        </ListWrapper>
      </RelativeWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px 20px 0px 0px;
  background-color: white;
  padding: 25px;
  position: absolute;
  bottom: 0;
  z-index: 3;
`;

const RelativeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ListWrapper = styled.div`
  height: 230px;
  margin-top: 15px;
  overflow-y: scroll;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 50px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  & button {
    border: 1px solid var(--main-color);
    color: var(--main-color);
    padding: 7px 15px;
    border-radius: 24px;
    font-size: 12px;
    white-space: nowrap;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
