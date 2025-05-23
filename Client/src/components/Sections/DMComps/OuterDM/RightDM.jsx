import React from "react";
import { MsgOuter } from "../../../../assets";

function RightDM() {
  return (
    <div className="ml-[27.5%] h-screen flex flex-col justify-center items-center border">
      <div className=" cursor-pointer h-[90px] w-[90px] border-2 rounded-full items-center justify-center flex ">
        <img src={MsgOuter} className="w-[50px]" alt="" />
      </div>
      <div className="mt-2 text-lg">Your messages</div>
      <div className="text-xs mt-0.5 text-white/70">
        Send a message to start a chat.
      </div>
      <button className="mt-4 bg-[#0095f6] text-sm font-semibold px-2.5 py-1.5 rounded-md">
        Send message
      </button>
    </div>
  );
}

export default RightDM;
