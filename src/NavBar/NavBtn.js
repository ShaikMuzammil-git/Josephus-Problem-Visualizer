import React from "react";

let NavBtn = (props) => {
  return (
    <>
      <li>
        <a href="#" className="navLink">
          {props.navTxt}
        </a>
      </li>
    </>
  );
};

export default NavBtn;
