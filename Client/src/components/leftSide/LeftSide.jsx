import React from "react";
import {
  HomeLogo,
  InstaLogo,
  SearchLogo,
  Explore,
  Reels,
  Messages,
  Notifications,
  Create,
  Profile,
  MetaAi,
  Threads,
  AIStudio,
  NewLogo,
} from "../../assets";

function LeftSide() {
  return (
    <div className="fixed">
      <div className="mt-8">
        <img src={NewLogo} width="100px" alt="Instagram" />
      </div>
      <ul className="space-y-7 mt-8">
        <li className="flex gap-x-3 items-center">
          <img src={HomeLogo} width="20px" />
          Home
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={SearchLogo} width="20px" />
          Search
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={Explore} width="20px" />
          Explore
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={Reels} width="20px" />
          Reels
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={Messages} width="20px" />
          Messages
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={Notifications} width="20px" />
          Notifications
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={Create} width="20px" />
          Create
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={Profile} className="rounded-full" width="20px" />
          Profile
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={MetaAi} width="20px" />
          Meta AI
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={AIStudio} width="20px" />
          AI Studio
        </li>
        <li className="flex gap-x-3 items-center">
          <img src={Threads} width="20px" />
          Threads
        </li>
      </ul>
    </div>
  );
}

export default LeftSide;
