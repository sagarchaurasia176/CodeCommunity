import React from "react";
import RocketImg from "../assets/rocket.png";
import FormPage from "./FormPage";
import { NavLink } from "react-router-dom";
function LoginPage() {
  return (
    <div>
      <div className=" grid sm:grid-cols-2  h-screen w-screen">
        <div className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
          {/* login page verifications */}
          <FormPage />
        </div>
        <div>
          <div className="hidden lg:flex relative h-screen bg-red-100  justify-center ">
           <NavLink to='/'>
           <img
              src={RocketImg}
              alt=""
              className="  cursor-pointer max-w-96  mt-32 object-contain"
            />
           </NavLink>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
