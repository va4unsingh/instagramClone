import React from "react";
import InnerDmHeader from "./InnerDmHeader";
import KeyboardDm from "./KeyboardDm";
import MainDm from "./MainDm";

function InnerDmCombine() {
  return (
    <div>
      <InnerDmHeader />
      <MainDm />
      <KeyboardDm />
    </div>
  );
}

export default InnerDmCombine;
