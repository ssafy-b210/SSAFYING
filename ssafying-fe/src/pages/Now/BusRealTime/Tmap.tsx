import { useEffect } from "react";
import markerImg from "../../../assets/img/imgBtn/dm.svg";

declare global {
  interface Window {
    Tmapv3: any;
  }
}

function Tmap() {
  const { Tmapv3 } = window;
  let map: any;

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
      map = new window.Tmapv3.Map("map_div", {
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

      getRP();
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

  //경로안내 요청 함수
  function getRP() {
    var s_latlng = new Tmapv3.LatLng(37.553756, 126.925356);
    var e_latlng = new Tmapv3.LatLng(37.554034, 126.975598);

    var optionObj = {
      reqCoordType: "WGS84GEO", //요청 좌표계 옵셥 설정입니다.
      resCoordType: "WGS84GEO", //응답 좌표계 옵셥 설정입니다.
      trafficInfo: "Y",
    };

    var params = {
      onComplete: onComplete,
      onProgress: onProgress,
      onError: onError,
    };

    // TData 객체 생성
    var tData = new Tmapv3.extension.TData();

    // TData 객체의 경로요청 함수
    tData.getRoutePlanJson(s_latlng, e_latlng, optionObj, params);
  }

  //경로안내
  // 경로안내
  function onComplete(this: any) {
    console.log(this._responseData); // json으로 데이터를 받은 정보들을 콘솔창에서 확인할 수 있습니다.

    var jsonObject = new Tmapv3.extension.GeoJSON();
    var jsonForm = jsonObject.rpTrafficRead(this._responseData);

    // 교통정보 표출시 생성되는 LineColor 입니다.
    var trafficColors = {
      // 사용자가 임의로 색상을 설정할 수 있습니다.
      // 교통정보 옵션 - 라인색상
      trafficDefaultColor: "#000000", // 교통 정보가 없을 때
      trafficType1Color: "#009900", // 원할
      trafficType2Color: "#7A8E0A", // 서행
      trafficType3Color: "#8E8111", // 정체
      trafficType4Color: "#FF0000", // 정체
    };
    jsonObject.drawRouteByTraffic(map, jsonForm, trafficColors);
    map.setCenter(new Tmapv3.LatLng(37.55676159947993, 126.94734232774672));
    map.setZoom(13);
  }

  //데이터 로드중 실행하는 함수입니다.
  function onProgress() {}

  //데이터 로드 중 에러가 발생시 실행하는 함수입니다.
  function onError() {
    alert("onError");
  }

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return <div id="map_div"></div>;
}

export default Tmap;
