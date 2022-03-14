import styled from "@emotion/styled";
import Add from "../../assets/Add";
import List from "../../assets/List";
import Location from "./../../assets/Location";
import { useDispatch } from "react-redux";
import { setModal } from "./../../redux/modal";

interface props {
  map: any;
  x: number;
  y: number;
}

const Header = ({ map, x, y }: props) => {
  const dispatch = useDispatch();

  function addPerson() {
    dispatch(setModal("addPerson"));
  }

  function moveMyLocation() {
    var moveLatLon = new window.kakao.maps.LatLng(x, y);
    map.panTo(moveLatLon);
  }
  return (
    <Wrapper>
      <button className="menu squareMenu">
        <List />
      </button>
      <CircleContainer>
        <button className="menu" onClick={moveMyLocation}>
          <Location />
        </button>
        <button className="menu" onClick={addPerson}>
          <Add />
        </button>
      </CircleContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  padding: 0px 25px;
  padding-top: 25px;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  & .menu {
    background-color: white;
    width: 45px;
    height: 45px;
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .squareMenu {
    border-radius: 5px;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  gap: 15px;
  & button {
    border-radius: 50%;
  }
`;
