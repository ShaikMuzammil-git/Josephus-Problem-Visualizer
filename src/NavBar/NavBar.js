import React from "react";
import NavBtn from "./NavBtn";

let NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <ul className="navBar__navLinks">
          <NavBtn navTxt="1.The Josephus Problem" />
          <NavBtn navTxt="2. Taking this problem statement to next Level" />
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
