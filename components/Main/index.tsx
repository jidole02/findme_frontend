import { useEffect, useState } from "react";

interface location {
  x: number;
  y: number;
}

const Main = () => {
  const [coordination, setCoordination] = useState<location>({ x: 0, y: 0 });
  const { x, y } = coordination;

  function getMyLocation() {
    navigator.geolocation.watchPosition(function (p) {
      setCoordination({
        x: p.coords.latitude,
        y: p.coords.longitude,
      });
    });
  }

  function drawMyLocation() {
    window.kakao.maps.load(() => {
      var markerPosition = new window.kakao.maps.LatLng(x, y);

      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
    });
  }

  function draw() {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(x, y), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      let marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(x, y),
      });
    });
  }

  useEffect(getMyLocation, []);

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
  }, [coordination.x]);

  return <div id="map" style={{ height: "100vh", width: "100vw" }} />;
};

export default Main;
