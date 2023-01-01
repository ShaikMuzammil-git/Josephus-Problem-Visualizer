import React, { useEffect, useRef } from "react";
import Option from "./Option";

let Options = () => {
  // ref hook to acquire  "mcq_optionsContainer"
  let refElement = useRef();

  // creating an array for storing the "label" children inside the "mcq_optionsContainer" container in an array
  let labelTextArr = [];

  // assigning the "label" children elements can be done only after they are rendered
  // so providing a delay of 1 mSec to wait untill they are finished rendering
  setTimeout(() => {
    labelTextArr = refElement.current.children;
  }, 1);

  // to assign random values to options text when page loads
  useEffect(() => {
    setTimeout(() => {
      // assigning random values to all 4 options
      for (let i = 0; i < 4; i++) {
        labelTextArr[i].children[1].innerText = Math.floor(Math.random() * 100);
      }

      // assigning the answer 73 to any one random option out of 4 available options
      labelTextArr[Math.floor(Math.random() * 4)].children[1].innerText = 73;
    }, 5);
  });

  return (
    <>
      <form className="mcq_optionsContainer" ref={refElement}>
        <Option />
        <Option />
        <Option />
        <Option />
      </form>
    </>
  );
};

export default Options;
