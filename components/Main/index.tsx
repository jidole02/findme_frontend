import { useEffect, useState } from "react";
import { person } from "../../interfaces/person";
import { useDispatch } from "react-redux";
import { setId } from "./../../redux/person";
import { setModal } from "./../../redux/modal";
import { setLocation } from "./../../redux/location";
import { MainViewProps } from "./type";
import MainView from "./view";
import { getNearMissingPerson } from "../../api/person";

const KAKAO_MAP_SCRIPT = `http://dapi.kakao.com/v2/maps/sdk.js?appkey=23ff1647b8abe7a607e42f5bbda3e52e&libraries=services&autoload=false`;

const Main = () => {
  const [coordination, setCoordination] = useState({ x: 0, y: 0 });
  const [nearData, setNearData] = useState<person[]>([]);
  const [map, setMap] = useState();
  const { x, y } = coordination;
  const dispatch = useDispatch();

  const getAllMissingPerson = async () => {
    const data = (await getNearMissingPerson({ x: x, y: y })).data;
    setNearData(data);
  };

  const getMyLocation = () => {
    navigator.geolocation.watchPosition((p) => {
      setCoordination({
        x: p.coords.latitude,
        y: p.coords.longitude,
      });
    });
  };

  const showDetail = () => {
    window.addEventListener("click", (event) => {
      const target: any = event.target;
      if (target.id === "marker") {
        dispatch(setId(target.className));
        dispatch(setModal("personDetail"));
      }
    });
  };

  const showMissingPerson = (map) => {
    if (nearData.length !== 0) {
      for (let i = 0; i < nearData.length; i++) {
        const content = `<img src="${nearData[i].image}" id="marker" class="${nearData[i]._id}" />`;
        const position = new window.kakao.maps.LatLng(
          nearData[i].x,
          nearData[i].y
        );
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: position,
          content: content,
        });
        customOverlay.setMap(map);
      }
    }
  };

  const showMyLocation = (map) => {
    const content = `<img src="maker.png" style="width:150px; height:150px; border-radius:50%;" />`;
    const position = new window.kakao.maps.LatLng(x, y);
    const customOverlay = new window.kakao.maps.CustomOverlay({
      position: position,
      content: content,
    });
    customOverlay.setMap(map);
  };

  const drawKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(x, y),
        level: 8,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      showMissingPerson(map);
      showMyLocation(map);
      setMap(map);
    });
  };

  const initKakaoMap = () => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = KAKAO_MAP_SCRIPT;
    document.head.appendChild(mapScript);

    if (x !== 0) {
      const onLoadKakaoMap = () => {
        drawKakaoMap();
      };
      mapScript.addEventListener("load", onLoadKakaoMap);
    }
  };

  useEffect(() => {
    getMyLocation();
    showDetail();
  }, []);

  useEffect(() => {
    getAllMissingPerson();
    dispatch(setLocation(x, y));
  }, [x]);

  useEffect(initKakaoMap, [x, nearData]);

  const props: MainViewProps = {
    map: map,
    data: nearData,
  };

  return <MainView {...props} />;
};

export default Main;
