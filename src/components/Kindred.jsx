import React from "react";
import KindredCanvas from "./canvas/Kindred";
import { SectionWrapper } from "../hoc";

function Kindred() {
  return (
    <section className=" w-full  h-screen border border-white bg-[#dddddc] mx-auto ">
      <KindredCanvas />
    </section>
  );
}

export default SectionWrapper(Kindred, "kindred");
