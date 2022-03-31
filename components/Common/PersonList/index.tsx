import styled from "@emotion/styled";
import { DesignSystem } from "../../../interfaces/designSystem";
import PersonalImage from "../Image";
import PersonalText from "../Text";
import { person } from "./../../../interfaces/person";

interface Props extends DesignSystem {
  type?: "personal" | "search";
  personList?: person[];
}

export default function PersonList({ type = "personal", personList }: Props) {
  if (type === "personal")
    return (
      <>
        {personList.map((_, index) => (
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
                6.2km 거리에 있습니다.
              </PersonalText>
            </div>
          </PersonalListWrapper>
        ))}
      </>
    );
  else return <></>;
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
