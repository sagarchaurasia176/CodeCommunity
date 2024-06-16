import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainAuthPage from "./auth/MainAuthPage";
import CreateRegister from "./auth/CreateRegister";
import FormPage from "./auth/FormPage";
import MainOutlet from "./MainOutlet";

function App() {
  return (
    <>
      <Routes>
        {/* MAIN-AUTH PAGE APPLY HERE */}
        <Route path="/" element={<MainOutlet/>}>
          {/* main element should be */}
          <Route index element = {<MainAuthPage/>}/>
          <Route path="/CreateRegister" element={<CreateRegister />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
