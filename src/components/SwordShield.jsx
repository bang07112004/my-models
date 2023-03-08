import React from "react";
import SwordShieldCanvas from "./canvas/SwordAndShield";
import { SectionWrapper } from "../hoc";

function SwordShield() {
  return (
    <section className=" w-full h-screen border border-white bg-[#dddddc] mx-auto">
      <SwordShieldCanvas />
    </section>
  );
}

export default SectionWrapper(SwordShield, "SwordShield");
