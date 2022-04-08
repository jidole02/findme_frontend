import { DesignSystem } from "../../../interfaces/designSystem";
import { person } from "./../../../interfaces/person";
import { getDistanceFromLatLonInKm } from "./../../../utils/getDistance";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import styled from "@emotion/styled";
import PersonalImage from "../Image";
import PersonalText from "../Text";

interface Props extends DesignSystem {
  type?: "personal" | "search";
  personList?: person[];
  maxDistance?: number;
}

export default function PersonList({
  type = "personal",
  personList,
  maxDistance,
}: Props) {
  const { x, y } = useSelector((state: RootState) => state.LocationReducer);
  if (type === "personal")
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {personList
          .filter(
            (_) => getDistanceFromLatLonInKm(x, y, _.x, _.y) < maxDistance
          )
          .map((_, index) => {
            const distance = getDistanceFromLatLonInKm(x, y, _.x, _.y).toFixed(
              2
            );
            return (
              <PersonalListWrapper key={index}>
                <button>
                  <strong>+</strong>
                </button>
                <PersonalImage size="small" src={_.image} />
                <div>
                  <PersonalText>{_.name}</PersonalText>
                  <PersonalText
                    css={{ marginTop: "2px" }}
                    color="#AAAAAA"
                    size="small"
                    weight="reguler"
                  >
                    {_.adress}
                  </PersonalText>
                  <PersonalText
                    css={{ marginTop: "10px" }}
                    color="#3184FF"
                    size="small"
                  >
                    {distance}km 거리에 있습니다.
                  </PersonalText>
                </div>
              </PersonalListWrapper>
            );
          })}
      </div>
    );
  else
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {personList.map((_, index) => (
          <SearchListWrapper key={index}>
            <div>
              <PersonalText>{_.name}</PersonalText>
              <PersonalText color="#AAAAAA" size="small" weight="reguler">
                {_.adress}
              </PersonalText>
            </div>
            <PersonalText color="#3184FF" size="small">
              1.3km
            </PersonalText>
          </SearchListWrapper>
        ))}
      </div>
    );
}

const PersonalListWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 15px;
  width: 100%;
  & div {
    display: flex;
    flex-direction: column;
  }
  & button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid var(--main-color);
    position: absolute;
    right: 0;
    top: 0;
    & strong {
      font-family: Arial, Helvetica, sans-serif;
      color: var(--main-color);
      font-size: 20px;
      font-weight: 400;
    }
  }
`;

const SearchListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
`;
