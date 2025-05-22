import React from "react";
import { GearIcon, Profile, PlusStory } from "../../../../assets";

function ProfileTop() {
  return (
    <div className="">
      <div className="flex gap-18 px-50 py-13">
        <img
          src={Profile}
          className="w-[140px] rounded-full cursor-pointer"
          alt="Profile"
        />

        <div className="flex flex-col gap-5 ">
          <div className="flex gap-4 items-center mt-1">
            <div className="text-lg cursor-pointer font-medium text-white/95">
              vadergotbaddies
            </div>
            <div className="flex gap-2">
              <button className="text-sm bg-white/19 font-medium py-1 px-2.5 rounded-lg cursor-pointer hover:bg-white/12">
                Edit Profile
              </button>
              <button className="text-sm bg-white/19 font-medium py-1 px-2.5 rounded-lg cursor-pointer hover:bg-white/12">
                View archive
              </button>
              <img src={GearIcon} className="w-[20px] cursor-pointer" alt="" />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="">
              <strong>0</strong> <span className="text-white/60">post</span>
            </div>
            <div className="cursor-pointer">
              <strong>1</strong> <span className="text-white/60">follower</span>
            </div>
            <div className="cursor-pointer">
              <strong>16</strong>
              <span className="text-white/60"> following</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-47 ">
        <div className=" cursor-pointer h-[70px] w-[70px] outline-2 outline-white/20 outline-offset-[3px] bg-white/5 rounded-full flex justify-center items-center ">
          <img src={PlusStory} className="w-[35px]" alt="" />
        </div>
        <div className="cursor-pointer ml-5 mt-2 text-sm">New</div>
      </div>
      <div className="mt-15 px-38 ">
        <div className="border-b-1 border-white/30"></div>
      </div>
    </div>
  );
}

export default ProfileTop;
