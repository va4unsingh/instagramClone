import React from "react";
import { cameraIcon } from "../../../../assets";

function Posts() {
  return (
    <div className="mt-15">
      <div className="flex justify-center">
        <div className=" cursor-pointer h-[60px] w-[60px] border-2 rounded-full items-center justify-center flex ">
          <img src={cameraIcon} className="w-[35px]" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2">
        <div className="font-extrabold text-2xl">Share Photos</div>
        <div className="text-sm mt-2">
          When you share photos, they will appear on your profile.
        </div>
        <button className="text-blue-500 font-semibold text-sm mt-4 cursor-pointer">Share your first photo</button>
      </div>
    </div>
  );
}

export default Posts;
