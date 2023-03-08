import React, { useEffect, useState } from "react";
import { characters } from "../constants";

function Navbar() {
  const [active, setActive] = useState("");
  const handleTitleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };
  return (
    <nav className="w-full h-10 bg-gradient-to-b from-pink-500 to bg-purple-500 sticky top-0 z-50 ">
      <ul className="list-none flex-row gap-10 sm:flex flex py-3 px-2 text-center justify-between">
        {characters.map((character) => (
          <li
            key={character.id}
            className={`${
              active === character.title ? "text-white" : "text-black"
            } cursor-pointer text-[18px] font-medium hover:text-white text-sm`}
            onClick={() => handleTitleClick(character.id)}
          >
            <a href={`#${character.id}`}>{character.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
