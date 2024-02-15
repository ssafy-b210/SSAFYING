import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { REACT_APP_TMAP_API_KEY } from "./apis/constants";
import { loadTMAPScript } from "./apis/api/shuttle/tmap";
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// loadTMAPScript(REACT_APP_TMAP_API_KEY)
// .then(() => {
// TMAP 스크립트가 로드된 후에 리액트 앱을 렌더링
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
// })
//  .catch((error) => {
//   console.error("Failed to load TMAP script:", error);
// });
