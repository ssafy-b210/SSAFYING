import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import BottomNavBar from "./components/Common/BottomNavBar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <BottomNavBar> */}
      <App />
      {/* </BottomNavBar> */}
    </BrowserRouter>
  </React.StrictMode>
);
