import { useEffect } from "react";

declare global {
  interface Window {
    Tmapv3: any;
  }
}

function Tmap() {
  const { Tmapv3 } = window;

  function initTmap() {
    const mapDiv = document.getElementById("map_div");

    if (!mapDiv?.firstChild) {
      const map = new window.Tmapv3.Map("map_div", {
        center: new Tmapv3.LatLng(37.566481622437934, 126.98502302169841), // 지도 초기 좌표
        width: "890px",
        height: "400px",
        zoom: 15,
      });
    }
  }

  useEffect(() => {
    initTmap();
  }, []);

  return <div id="map_div"></div>;
}

export default Tmap;
