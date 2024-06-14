import { Routes, Route } from "react-router-dom";
import "./App.css";
// import HeaderPart from './Pages/HeaderPart'
// import MainPage from './Pages/MainPage'
import LoginPage from "./auth/LoginPage";
import CreateRegister from "./auth/CreateRegister";
// import MainPage from "./Pages/MainPage";


function App() {
  return (
    <>
      {/* router apply here  */}
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        {/* <Route path="/Register" element={<LoginPage/>}></Route> */}
      </Routes>

    </>
  );
}

export default App;
