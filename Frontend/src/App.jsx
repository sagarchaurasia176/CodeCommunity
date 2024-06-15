import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateRegister from "./auth/CreateRegister";
import FormPage from "./auth/FormPage";
import MainPageRouter from "./MainPageRouter";
import MainAuthPage from "./auth/MainAuthPage";

function App() {
  return (
    <>
      <MainAuthPage />
      <Routes>
        {/* main element here */}
        <Route path="/" element={<MainPageRouter />}>
          {/* ceate register page here so we get */}
          <Route path="/Register" element={<CreateRegister />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
