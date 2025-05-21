import React from "react";
import { Profile } from "../../assets";

function RightSide() {
  return (
    <div>
      <div className="mt-8 flex items-center gap-3 text-xs">
        <img
          src={Profile}
          className="rounded-full"
          width="38px"
          alt="Profile"
        />
        vadergotbaddies
        <span className="ml-14 text-sky-500 ">Switch</span>
      </div>
      <div className="items-center text-xs mt-5 ">
        <span className="font-semibold text-white/50">Suggested for you</span>
        <span className="ml-27">See All</span>
      </div>
      <ul className="text-[11px] text-white/30 mt-5 flex flex-wrap gap-x-2 max-w-[240px]">
        <li>About</li>
        <li>Help</li>
        <li>Press</li>
        <li>API</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Locations</li>
        <li>Language</li>
        <li>Meta Verified</li>
      </ul>
      <div className="text-[11px] text-white/30 mt-4">
        © 2025 Instagram from Meta
      </div>
    </div>
  );
}

export default RightSide;
