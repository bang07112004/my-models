import React from "react";
import LucianCanvas from "./canvas/Lucian";
import { SectionWrapper } from "../hoc";

function Luci() {
  return (
    <section className=" w-full  h-screen border border-white bg-[#dddddc] mx-auto ">
      <LucianCanvas />
    </section>
  );
}

export default SectionWrapper(Luci, "lucian");
