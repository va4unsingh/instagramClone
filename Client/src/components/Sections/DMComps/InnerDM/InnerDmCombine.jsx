import React from "react";
import InnerDmHeader from "./InnerDmHeader";
import KeyboardDm from "./KeyboardDm";
import MainDm from "./MainDm";

function InnerDmCombine() {
  return (
    <div>
      <InnerDmHeader />
      <KeyboardDm />
      <MainDm />
    </div>
  );
}

export default InnerDmCombine;
