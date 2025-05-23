import React from "react";
import LeftDM from "../../components/Sections/DMComps/OuterDM/LeftDM";
import RightDM from "../../components/Sections/DMComps/OuterDM/RightDM";
import InnerDmHeader from "../../components/Sections/DMComps/InnerDM/InnerDmHeader";
import { Outlet } from "react-router-dom";

function Inbox() {
  return (
    <div>
      <div className="flex ">
        <LeftDM />
        {/* <RightDM /> */}
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default Inbox;
