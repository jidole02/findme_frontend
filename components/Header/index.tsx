import { useDispatch, useSelector } from "react-redux";
import { setModal } from "./../../redux/modal";
import { RootState } from "../../redux";
import { HeaderViewProps } from "./type";
import HeaderView from "./view";
import { ChangeEvent, useState } from "react";
import { getPersonSearchResult } from "./../../api/person";
import { person } from "./../../interfaces/person";

interface props {
  map: any;
}

const Header = ({ map }: props) => {
  const [searchData, setSearchData] = useState<person[]>([]);
  const dispatch = useDispatch();
  const { x, y } = useSelector((state: RootState) => state.LocationReducer);

  const moveMyLocation = () => {
    var moveLatLon = new window.kakao.maps.LatLng(x, y);
    map.panTo(moveLatLon);
  };

  const addPerson = () => {
    dispatch(setModal("addPerson"));
  };

  const search = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value) {
      const data = (await getPersonSearchResult(value)).data;
      setSearchData(data);
    }
  };

  const props: HeaderViewProps = {
    addPerson: addPerson,
    moveMyLocation: moveMyLocation,
    search: search,
    searchData,
    x,
    y,
  };

  return <HeaderView {...props} />;
};

export default Header;
