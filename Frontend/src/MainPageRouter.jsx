import React from "react";
import { Outlet } from "react-router-dom";
// import RocketImg from '../src/assets/rocket.png'
const MainPageRouter = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainPageRouter;
