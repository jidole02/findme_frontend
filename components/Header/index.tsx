import { useDispatch, useSelector } from "react-redux";
import { setModal } from "./../../redux/modal";
import { RootState } from "../../redux";
import { HeaderViewProps } from "./type";
import HeaderView from "./view";

interface props {
  map: any;
}

const Header = ({ map }: props) => {
  const dispatch = useDispatch();
  const { x, y } = useSelector((state: RootState) => state.LocationReducer);

  const moveMyLocation = () => {
    var moveLatLon = new window.kakao.maps.LatLng(x, y);
    map.panTo(moveLatLon);
  };

  const addPerson = () => {
    dispatch(setModal("addPerson"));
  };

  const props: HeaderViewProps = {
    addPerson: addPerson,
    moveMyLocation: moveMyLocation,
  };

  return <HeaderView {...props} />;
};

export default Header;
