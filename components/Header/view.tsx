import { Fragment } from "react";
import { HeaderViewProps } from "./type";
import styled from "@emotion/styled";
import PersonalInput from "../Common/Input";
import IconButton from "./../Common/Button/IconButton/index";
import Add from "../../assets/Add";
import Location from "./../../assets/Location";
import Search from "../../assets/Search";
import { getDistanceFromLatLonInKm } from "./../../utils/getDistance";

export default function HeaderView({
  addPerson,
  moveMyLocation,
  search,
  searchData,
  x,
  y,
}: HeaderViewProps) {
  return (
    <Fragment>
      <SearchWrapper>
        <SearchInputWrapper>
          <PersonalInput
            pholder="검색어를 입력하세요"
            event={search}
            css={{
              background: "white",
              border: "none",
              boxShadow: "0px 0px 10px rgb(0,0,0,0.1)",
            }}
          />
          <Search />
        </SearchInputWrapper>
        <div style={{ width: "100%", position: "relative" }}>
          <SearchResult>
            {searchData.map((_, index) => (
              <div className="container" key={index}>
                <div>
                  <h3>{_.name}</h3>
                  <span>{_.adress}</span>
                </div>
                <span className="distance">
                  {getDistanceFromLatLonInKm(x, y, _.x, _.y).toFixed(2)}km
                </span>
              </div>
            ))}
          </SearchResult>
        </div>
      </SearchWrapper>
      <ButtonWrapper>
        <IconButton event={addPerson}>
          <Add />
        </IconButton>
        <IconButton event={moveMyLocation}>
          <Location />
        </IconButton>
      </ButtonWrapper>
    </Fragment>
  );
}

const SearchWrapper = styled.div`
  width: 100%;
  padding: 0 25px;
  position: absolute;
  margin-top: 20px;
  z-index: 5;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const SearchResult = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.1);
  max-height: 150px;
  overflow-y: scroll;
  & .container {
    width: 100%;
    padding: 10px 15px;
    background-color: white;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & div {
      & h3 {
        color: black;
        font-size: 14px;
        font-weight: 400;
      }
      & span {
        font-size: 12px;
        color: #aaaaaa;
        font-weight: 400;
      }
    }
    & .distance {
      color: var(--main-color);
      font-size: 12px;
    }
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 25px;
  top: 85px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 3;
`;
