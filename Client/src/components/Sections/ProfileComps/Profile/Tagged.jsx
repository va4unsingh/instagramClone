import React from "react";
import { userTag } from "../../../../assets";

function Tagged() {
  return (
    <div className="mt-15">
      <div className="flex justify-center">
        <div className=" cursor-pointer h-[60px] w-[60px] border-2 rounded-full items-center justify-center flex ">
          <img src={userTag} className="w-[35px]" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2">
        <div className="font-extrabold text-2xl">Photos of you</div>
        <div className="text-sm mt-2">
          When people tag you in photos, they'll appear here.
        </div>
      </div>
    </div>
  );
}

export default Tagged;
