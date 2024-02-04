import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TMAP_API_KEY } from "./apis/constants";
import { loadTMAPScript } from "./apis/api/shuttle/tmap";

loadTMAPScript(TMAP_API_KEY)
  .then(() => {
    // TMAP 스크립트가 로드된 후에 리액트 앱을 렌더링
    const root = ReactDOM.createRoot(
      document.getElementById("root") as HTMLElement
    );
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
    

  })
  .catch(error => {
    console.error('Failed to load TMAP script:', error);
  });

