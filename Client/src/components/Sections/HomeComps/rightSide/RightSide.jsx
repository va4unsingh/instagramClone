import React from "react";
import { Profile } from "../../../../assets";

function RightSide() {
  const footLinks = [
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Language",
    "Meta Verified",
  ];
  return (
    <div>
      <div className="mt-8 flex items-center gap-3 text-xs">
        <img
          src={Profile}
          className="rounded-full cursor-pointer"
          width="38px"
          alt="Profile"
        />
        <span className="cursor-pointer">vadergotbaddies</span>
        <span className="ml-14 text-sky-500 cursor-pointer hover:text-blue-200 transition-colors duration-20">
          Switch
        </span>
      </div>
      <div className="items-center text-xs mt-5 ">
        <span className="font-semibold text-white/60 ">Suggested for you</span>
        <span className="ml-27 cursor-pointer hover:opacity-60 transition-opacity duration-20">
          See All
        </span>
      </div>
      <ul className="text-[11px] text-white/40 mt-5 flex flex-wrap gap-x-2 max-w-[240px]">
        {footLinks.map((link, index) => (
          <li className="cursor-pointer hover:underline" key={index}>
            {link}
          </li>
        ))}
      </ul>
      <div className="text-[11px] text-white/40 mt-4">
        © 2025 Instagram from Meta
      </div>
    </div>
  );
}

export default RightSide;
