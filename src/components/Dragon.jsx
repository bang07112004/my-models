import React from "react";
import DragonCanvas from "./canvas/Dragon";
import { SectionWrapper } from "../hoc";

function Dragon() {
  return (
    <section className=" w-full  h-screen border border-white bg-[#dddddc] mx-auto ">
      <DragonCanvas />
    </section>
  );
}

export default SectionWrapper(Dragon, "dragon");
