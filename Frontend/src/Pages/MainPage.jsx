import React from "react";
import Leftside from "./Leftside";
import CenterSide from "./CenterSide";
import Rightside from "./Rightside";
import HeaderNav from "./Headers/HeaderNav";

function MainPage() {
  return (

    <div>
    
    <HeaderNav/>
      {/* navbar */}
      <div className=" grid m-auto h-screen bg-white sm:grid-cols-12">
        {/* left side */}
        <div className=" sm:block sm:col-span-2 relative">
          <Leftside />
        </div>
        {/* center side */}
        <div className=" sm:col-span-8 bg-white
        border-4 border-white-900  border-dashed ">
          {" "}
          <CenterSide />
        </div>
        {/* right side */}
        <div className=" sm:col-span-2  ">
          <Rightside />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
