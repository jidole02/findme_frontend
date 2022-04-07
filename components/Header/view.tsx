import { Fragment } from "react";
import { HeaderViewProps } from "./type";
import styled from "@emotion/styled";
import PersonalInput from "../Common/Input";
import IconButton from "./../Common/Button/IconButton/index";
import Add from "../../assets/Add";
import Location from "./../../assets/Location";
import Search from "../../assets/Search";

export default function HeaderView({
  addPerson,
  moveMyLocation,
}: HeaderViewProps) {
  return (
    <Fragment>
      <SearchWrapper>
        <SearchInputWrapper>
          <PersonalInput
            pholder="검색어를 입력하세요"
            event={() => {}}
            css={{
              background: "white",
              border: "none",
              boxShadow: "0px 0px 10px rgb(0,0,0,0.1)",
            }}
          />
          <Search />
        </SearchInputWrapper>
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
  z-index: 3;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
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
