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
  InstaLogoSmall,
} from "../../../assets";
import { useLocation, useNavigate } from "react-router-dom";

function LeftSide() {
  const menuItems = [
    { label: "Home", icon: HomeLogo, path: "/" },
    { label: "Search", icon: SearchLogo },
    { label: "Explore", icon: Explore },
    { label: "Reels", icon: Reels },
    { label: "Messages", icon: Messages, path: "/inbox" },
    { label: "Notifications", icon: Notifications },
    { label: "Create", icon: Create },
    { label: "Profile", icon: Profile, isProfile: true },
    { label: "Meta AI", icon: MetaAi },
    { label: "AI Studio", icon: AIStudio },
    { label: "Threads", icon: Threads },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const isInbox = location.pathname === "/inbox";

  return (
    <div className="fixed ">
      <div className="mt-6 p-2 pl-6">
        <img
          className="cursor-pointer"
          src={isInbox ? InstaLogoSmall : NewLogo}
          width={isInbox ? "20px" : "100px"}
          alt="Instagram"
        />
      </div>
      <ul className={`mt-6 space-y-2  pl-3`}>
        {menuItems.map((item, index) => (
          <li
            onClick={() => item.path && navigate(item.path)}
            className={`flex gap-x-3 items-center rounded-lg  ${
              isInbox ? " px-3 pr-4 py-3" : "pr-17 pl-3 py-2.5"
            } cursor-pointer hover:bg-gray-500/15`}
            key={index}
          >
            <img
              src={item.icon}
              className={item.isProfile ? "rounded-full" : ""}
              width="20px"
              alt={item.label}
            />
            {!isInbox && <span>{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftSide;
