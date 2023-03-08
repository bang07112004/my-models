import React from "react";
import Dari from "./Dari";
import Dragon from "./Dragon";
import SwordShield from "./SwordShield";
import Lucian from "./Luci";
import Kindred from "./Kindred";

function Models() {
  return (
    <div className=" w-screen bg-slate-600 min-h-screen h-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2  ">
      <div className="mx-auto w-full ">
        {" "}
        <Dari />
      </div>
      <div className="mx-auto w-full ">
        {" "}
        <SwordShield />
      </div>
      <div className="mx-auto w-full ">
        <Dragon />
      </div>
      <div className="mx-auto w-full ">
        <Lucian />
      </div>
      <div className="mx-auto w-full ">
        <Kindred />
      </div>
    </div>
  );
}

export default Models;
