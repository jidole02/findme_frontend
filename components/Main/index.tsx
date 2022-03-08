import { useEffect, useState } from "react";
import Header from "../Header";
import UnderTab from "../UnderTab";
import axios from "axios";
import { person } from "../../interfaces/person";

interface location {
  x: number;
  y: number;
}

const Main = () => {
  const [coordination, setCoordination] = useState<location>({ x: 0, y: 0 });
  const [map, setMap] = useState();
  const [nearData, setNearData] = useState<person[]>([]);
  const { x, y } = coordination;

  async function getAllMissingPerson() {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/missing/near`,
      {
        x,
        y,
      }
    );
    setNearData(res.data);
  }

  function getMyLocation() {
    navigator.geolocation.watchPosition(function (p) {
      setCoordination({
        x: p.coords.latitude,
        y: p.coords.longitude,
      });
    });
  }

  function draw() {
    window.kakao.maps.load(() => {
      // 지도 생성
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(x, y),
        level: 8,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(map);
      // 가까운 실종자 띄우기
      if (nearData.length !== 0) {
        for (let i = 0; i < nearData.length; i++) {
          const content = `<img src="ddyzd${i + 1}.png" id="marker" />`;
          const position = new window.kakao.maps.LatLng(
            nearData[i].x,
            nearData[i].y
          );
          const customOverlay = new window.kakao.maps.CustomOverlay({
            position: position,
            content: content,
          });

          // 커스텀 오버레이를 지도에 표시합니다
          customOverlay.setMap(map);
        }
      }
      // 현위치 마커 이미지 변경
      const content = `<img src="maker.png" style="width:150px; height:150px; border-radius:50%;" />`;
      const position = new window.kakao.maps.LatLng(x, y);
      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: position,
        content: content,
      });
      customOverlay.setMap(map);
    });
  }

  useEffect(getMyLocation, []);

  useEffect(() => {
    getAllMissingPerson();
  }, [x]);

  useEffect(() => {
    if (x !== 0) {
      const mapScript = document.createElement("script");
      mapScript.async = true;
      mapScript.src = `http://dapi.kakao.com/v2/maps/sdk.js?appkey=23ff1647b8abe7a607e42f5bbda3e52e&autoload=false`;
      document.head.appendChild(mapScript);

      const onLoadKakaoMap = () => {
        draw();
      };
      mapScript.addEventListener("load", onLoadKakaoMap);
    }
  }, [coordination.x, nearData]);

  return (
    <>
      <Header map={map} x={x} y={y} />
      <UnderTab data={nearData} />
      <div id="map" style={{ height: "100vh", width: "100vw" }} />
    </>
  );
};

export default Main;
