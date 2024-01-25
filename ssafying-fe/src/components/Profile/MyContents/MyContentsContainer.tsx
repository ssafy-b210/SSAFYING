import { Outlet } from "react-router";
import ContentTabBar from "./ContentTabBar";

function MyContentsContainer() {
  return (
    <div>
      <ContentTabBar />
      <Outlet />
    </div>
  );
}

export default MyContentsContainer;
