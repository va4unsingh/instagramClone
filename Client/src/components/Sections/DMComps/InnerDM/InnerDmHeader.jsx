import React from "react";
import { NavLink } from "react-router-dom";
import { blueTick, infoI, Profile } from "../../../../assets";

function InnerDmHeader() {
  return (
    <div className="ml-[27.5%] border-b border-white/15 ">
      <NavLink to="/inbox/vader">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 my-4 px-3.5 ">
            <img src={Profile} className="w-[40px] rounded-full" />
            <div className="flex flex-col leading-5">
              <div className="flex items-center space-x-1">
                <div>Varun</div>
                <img src={blueTick} className="w-[15px]" />
              </div>
              <div className="text-xs text-white/60">vadergotbaddies</div>
            </div>
          </div>
          <div className="flex items-center justify-center border-2 rounded-full h-[22px] w-[22px] mr-6">
            <img src={infoI} className="w-[5px] " />
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default InnerDmHeader;
