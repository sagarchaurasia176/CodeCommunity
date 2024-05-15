import { Routes,Route } from "react-router-dom";
import "./App.css";
// import HeaderPart from './Pages/HeaderPart'
// import MainPage from './Pages/MainPage'
import LoginPage from "./auth/LoginPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <>
      <LoginPage />

      {/* router apply here  */}
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
      {/* apply the routes concept here */}
      {/* <HeaderPart/>
      <MainPage/> */}
    </>
  );
}

export default App;
