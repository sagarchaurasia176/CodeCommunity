import React from "react";
import HeaderPart from "./HeaderPart";
import Leftside from "./Leftside";
import CenterSide from "./CenterSide";
import Rightside from "./Rightside";

function MainPage() {
  return (
    <div>
      {/* navbar */}
      <div className=" grid m-auto bg-white sm:grid-cols-12 p-2  gap-2">
        {/* left side */}
        <div className="  sm:col-span-2 ">
          <Leftside />
        </div>
        {/* center side */}
        <div className=" sm:col-span-8  bg-slate-400">
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
