import React from "react";
import Question from "./Question/Question";
import Options from "./Options/OptionsContainer";
let MCQ = () => {
  return (
    <>
      <div className="container_mcq">
        <Question />
        <Options />
      </div>
    </>
  );
};

export default MCQ;
