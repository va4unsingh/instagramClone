import React from "react";
import { PenNotebook, Profile } from "../../../../assets";
import LowerOuterMsg from "./LowerMsg/LowerOuterMsg";

function LeftDM() {
  const user = Array(10).fill({
    name: "Varun",
    imgSrc: Profile,
  });

  return (
    <div className="px-5 py-8 w-[26%] h-full border-r border-white">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">vadergotbaddies</div>
        <div>
          <img src={PenNotebook} className="w-[20px]" alt="" />
        </div>
      </div>

      <div>
        <div className="mt-10 flex flex-col">
          <img src={Profile} className="w-[70px] rounded-full" alt="" />
          <div className="text-xs text-white/60 ml-2">Your Note</div>
        </div>
      </div>

      <div className=" flex justify-between mt-7 text-sm">
        <div className="font-semibold ">Messages</div>
        <div className="font-semibold text-white/60">Requests</div>
      </div>

      {/* LowerOuterMsg  */}
      {user.map((user, index) => (
        <LowerOuterMsg key={index} user={user} />
      ))}
    </div>
  );
}

export default LeftDM;
