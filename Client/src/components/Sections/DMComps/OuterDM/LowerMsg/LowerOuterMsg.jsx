import React from "react";
import { Profile } from "../../../../../assets";

function LowerOuterMsg({ user }) {
  return (
    <div>
      <div className="mt-6 flex items-center">
        <div>
          <img src={Profile} className="w-[55px] rounded-full" alt="" />
        </div>
        <div className="flex flex-col ml-3 gap-0.5">
          <div className="text">Varun</div>
          <div className="text-sm text-white/70">
            You send an attachment.<span> • 16h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LowerOuterMsg;
