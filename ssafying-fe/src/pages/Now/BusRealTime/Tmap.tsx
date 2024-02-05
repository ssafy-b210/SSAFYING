import { useEffect } from "react";
import markerImg from "../../../assets/img/imgBtn/dm.svg";

declare global {
  interface Window {
    Tmapv3: any;
  }
}

function Tmap() {
  const { Tmapv3 } = window;

  // 현재 위치 요청 후 지도 생성
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      initTmap(latitude, longitude);
    });
  }

  // 지도 생성
  function initTmap(latitude: number, longitude: number) {
    const mapDiv = document.getElementById("map_div");

    if (!mapDiv?.firstChild) {
      const map = new window.Tmapv3.Map("map_div", {
        center: new Tmapv3.LatLng(latitude, longitude),
        width: "890px",
        height: "400px",
        zoom: 15,
      });

      //Marker 객체 생성.
      const marker = new Tmapv3.Marker({
        position: new Tmapv3.LatLng(latitude, longitude),
        icon: markerImg,
        map: map,
      });

      resizeMap();
      map.resize();
    }
  }

  //지도의 사이즈를 지정한 값만큼 변경할 수 있는 함수입니다.
  function resizeMap() {
    const mapResize = document.getElementById("map_div"); //map의 div

    if (mapResize !== null) {
      mapResize.style.width = "100%"; //map의 width 변경
      mapResize.style.height = "400px"; //map의 height 변경
    }
  }

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return <div id="map_div"></div>;
}

export default Tmap;
