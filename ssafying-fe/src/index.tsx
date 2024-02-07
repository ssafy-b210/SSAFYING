import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { REACT_APP_TMAP_API_KEY } from "./apis/constants";
import { loadTMAPScript } from "./apis/api/shuttle/tmap";
import { Provider } from "react-redux";
import store from "./store";

// loadTMAPScript(REACT_APP_TMAP_API_KEY)
// .then(() => {
// TMAP 스크립트가 로드된 후에 리액트 앱을 렌더링
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
// })
// .catch((error) => {
//   console.error("Failed to load TMAP script:", error);
// });
