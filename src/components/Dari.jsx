import React from "react";
import DariusCanvas from "./canvas/Darius";
import { SectionWrapper } from "../hoc";

function Dari() {
  return (
    <section className=" w-full  h-screen border border-white bg-[#dddddc] mx-auto ">
      <DariusCanvas />
    </section>
  );
}

export default SectionWrapper(Dari, "darius");
