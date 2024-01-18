import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/User/UserLogin";
import UserSignup from "./pages/User/UserSignup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
    </Routes>
  );
}

export default App;
