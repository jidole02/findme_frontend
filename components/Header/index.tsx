import Add from "../../assets/Add";
import Location from "./../../assets/Location";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "./../../redux/modal";
import { Fragment } from "react";
import PersonalInput from "../Common/Input";
import IconButton from "./../Common/Button/IconButton/index";
import Search from "../../assets/Search";
import { RootState } from "../../redux";

interface props {
  map: any;
}

const Header = ({ map }: props) => {
  const dispatch = useDispatch();
  const { x, y } = useSelector((state: RootState) => state.LocationReducer);
  function moveMyLocation() {
    var moveLatLon = new window.kakao.maps.LatLng(x, y);
    map.panTo(moveLatLon);
  }
  function addPerson() {
    dispatch(setModal("addPerson"));
  }
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          padding: "0 25px",
          position: "absolute",
          marginTop: "20px",
          zIndex: 3,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
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
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: "25px",
          top: "85px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 3,
        }}
      >
        <IconButton event={addPerson}>
          <Add />
        </IconButton>
        <IconButton event={moveMyLocation}>
          <Location />
        </IconButton>
      </div>
    </Fragment>
  );
};

export default Header;
