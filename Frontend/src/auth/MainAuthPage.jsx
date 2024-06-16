import React, { useState } from "react";
import RocketImg from "../assets/rocket.png";
import FormPage from "./FormPage";
import CreateRegister from "./CreateRegister";

const MainAuthPage = () => {
  const [check, setCheck] = useState(true);
  // check if its click or not
  const tooglePage = () => {
    setCheck((prev) => !prev);
  };
  return (
    <div>
      <div className=" lg:flex lg:justify-between ">
        {/* login page apply here so we get */}
        <div className=" mt-16 m-auto  w-[340px] ">
          {check ? (
            <FormPage tooglePage={tooglePage} />
          ) : (
            <CreateRegister tooglePage={tooglePage} />
          )}
        </div>
        {/* rocket image   apply here */}
        <div>
          <div className="hidden  rounded-full lg:flex relative  max-w-screen-lg  h-screen  justify-center ">
            <img
              src={RocketImg}
              alt=""
              className="animate  animate-accordion-up  max-w-96  mt-32 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAuthPage;
