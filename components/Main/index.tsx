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

  function draw() {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(x, y),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      const imageSrc = "/maker.png",
        imageSize = new window.kakao.maps.Size(120, 120),
        imageOption = { offset: new window.kakao.maps.Point(27, 69) };

      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(x, y),
      });
      marker.setImage(markerImage);
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
