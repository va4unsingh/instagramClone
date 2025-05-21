import React from "react";
import { HomeLogo, InstaLogo, SearchLogo } from "../../assets";

function LeftSide() {
  return (
    <div className="">
      <div className="mt-8">
        <img src={InstaLogo} width="100px" alt="Instagram" />
      </div>
      <ul className="space-y-7 mt-8 ">
        <li className="flex gap-x-3 items-center">
          <img src={HomeLogo} width="20px" />
          Home
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={SearchLogo} width="20px" />
          Search
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={HomeLogo} width="20px" />
          Explore
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={HomeLogo} width="20px" />
          Reels
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={HomeLogo} width="20px" />
          Messages
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={HomeLogo} width="20px" />
          Notifications
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={HomeLogo} width="20px" />
          Create
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={HomeLogo} width="20px" />
          Profile
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={HomeLogo} width="20px" />
          Meta AI
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={HomeLogo} width="20px" />
          AI Studio
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={HomeLogo} width="20px" />
          Threads
        </li>
      </ul>
    </div>
  );
}

export default LeftSide;
