import React from "react";
import { PenNotebook, Profile } from "../../../../assets";
import LowerOuterMsg from "./LowerMsg/LowerOuterMsg";
import "./scrollBar.css";

function LeftDM() {
  const user = Array(10).fill({
    name: "Varun",
    imgSrc: Profile,
  });

  return (
    <div className=" pt-8 w-[26%] h-screen border-r border-white/15 fixed flex flex-col">
      <div className="flex justify-between items-center px-5">
        <div className="text-lg font-bold">vadergotbaddies</div>
        <div>
          <img src={PenNotebook} className="w-[20px]" alt="" />
        </div>
      </div>

      <div>
        <div className="mt-10 flex flex-col px-5">
          <img src={Profile} className="w-[70px] rounded-full" alt="" />
          <div className="text-xs text-white/60 ml-2">Your Note</div>
        </div>
      </div>

      <div className=" flex justify-between mt-7 text-sm px-5">
        <div className="font-semibold ">Messages</div>
        <div className="font-semibold text-white/60">Requests</div>
      </div>

      <div className="overflow-y-auto flex-1 mt-2 -ml-2  custom-scrollbar">
        {/* LowerOuterMsg  */}
        {user.map((user, index) => (
          <LowerOuterMsg key={index} user={user}  index={index}/>
        ))}
      </div>
    </div>
  );
}

export default LeftDM;
