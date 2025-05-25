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
} from "../../../../assets";
import { useLocation, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../features/modals/modalSlice";

function LeftSide() {
  const dispatch = useDispatch();

  const handleCreateClick = () => {
    dispatch(openModal());
  };

  const menuItems = [
    { label: "Home", icon: HomeLogo, path: "/" },
    { label: "Search", icon: SearchLogo },
    { label: "Explore", icon: Explore },
    { label: "Reels", icon: Reels },
    { label: "Messages", icon: Messages, path: "/inbox" },
    { label: "Notifications", icon: Notifications },
    { label: "Create", icon: Create },
    { label: "Profile", icon: Profile, isProfile: true, path: "/profile" },
    { label: "Meta AI", icon: MetaAi },
    { label: "AI Studio", icon: AIStudio },
    { label: "Threads", icon: Threads },
  ];

  const location = useLocation();
  const isInbox =
    location.pathname === "/inbox" || location.pathname.includes("/inbox/");

  return (
    <div className="fixed">
      <div className="mt-6 p-2 pl-6">
        <img
          className="cursor-pointer"
          src={isInbox ? InstaLogoSmall : NewLogo}
          width={isInbox ? "20px" : "100px"}
          alt="Instagram"
        />
      </div>
      <ul className={`mt-6 space-y-2 pl-3`}>
        {menuItems.map((item, index) => {
          // If item has a path, render as NavLink
          if (item.path) {
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex gap-x-3 items-center rounded-lg cursor-pointer hover:bg-gray-500/15 ${
                      isInbox ? "px-3 pr-4 py-3" : "pr-17 pl-3 py-2.5"
                    } ${isActive ? "bg-gray-500/20 font-semibold" : ""}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <img
                        src={item.icon}
                        className={
                          item.isProfile
                            ? `rounded-full ${
                                isActive ? "border-2 border-white" : ""
                              }`
                            : ""
                        }
                        width="20px"
                        alt={item.label}
                      />
                      {!isInbox && <span>{item.label}</span>}
                    </>
                  )}
                </NavLink>
              </li>
            );
          }

          // For items without paths, render as regular div
          return (
            <li
              className={`flex gap-x-3 items-center rounded-lg ${
                isInbox ? "px-3 pr-4 py-3" : "pr-17 pl-3 py-2.5"
              } cursor-pointer hover:bg-gray-500/15`}
              key={index}
              onClick={item.label === "Create" ? handleCreateClick : undefined}
            >
              <img
                src={item.icon}
                className={item.isProfile ? "rounded-full" : ""}
                width="20px"
                alt={item.label}
              />
              {!isInbox && <span>{item.label}</span>}
            </li>
          );
        })}
      </ul>
      {/* <ul className={`mt-6 space-y-2 pl-3`}>
        <li className="flex gap-x-3 items-center rounded-lg  pr-17 pl-3 py-2.5 cursor-pointer hover:bg-gray-500/15">
          <img src={HomeLogo} width="20px" />
          Home
        </li>
        <li className="flex gap-x-3 items-center rounded-lg  pr-17 pl-3 py-2.5 cursor-pointer hover:bg-gray-500/15">
          <img src={SearchLogo} width="20px" />
          Search
        </li>
        <li className="flex gap-x-3 items-center rounded-lg  pr-17 pl-3 py-2.5 cursor-pointer hover:bg-gray-500/15">
          <img src={Explore} width="20px" />
          Explore
        </li>
        <li className="flex gap-x-3 items-center rounded-lg  pr-17 pl-3 py-2.5 cursor-pointer hover:bg-gray-500/15">
          <img src={Reels} width="20px" />
          Reels
        </li>
        <NavLink
          to="/inbox"
           className={({ isActive }) =>
                    `flex gap-x-3 items-center rounded-lg cursor-pointer hover:bg-gray-500/15 ${
                      isInbox ? "px-3 pr-4 py-3" : "pr-17 pl-3 py-2.5"
                    } ${isActive ? "bg-gray-500/20 font-semibold" : ""}`
                  }
        >
          <img src={Messages} width="20px" />
          Messages
        </NavLink>
        <li className="flex gap-x-3 items-center rounded-lg  pr-17 pl-3 py-2.5 cursor-pointer hover:bg-gray-500/15">
          <img src={Notifications} width="20px" />
          Notifications
        </li>
        <li className="flex gap-x-3 items-center rounded-lg  pr-17 pl-3 py-2.5 cursor-pointer hover:bg-gray-500/15">
          <img src={Create} width="20px" />
          Create
        </li>
        <li className="flex gap-x-3 items-center rounded-lg  pr-17 pl-3 py-2.5 cursor-pointer hover:bg-gray-500/15">
          <img src={Profile} className="rounded-full" width="20px" />
          Profile
        </li>
        <li className="flex gap-x-3 items-center rounded-lg  pr-17 pl-3 py-2.5 cursor-pointer hover:bg-gray-500/15">
          <img src={MetaAi} width="20px" />
          Meta AI
        </li>
        <li className="flex gap-x-3 items-center rounded-lg  pr-17 pl-3 py-2.5 cursor-pointer hover:bg-gray-500/15">
          <img src={AIStudio} width="20px" />
          AI Studio
        </li>
        <li className="flex gap-x-3 items-center rounded-lg  pr-17 pl-3 py-2.5 cursor-pointer hover:bg-gray-500/15">
          <img src={Threads} width="20px" />
          Threads
        </li>
      </ul> */}
    </div>
  );
}

export default LeftSide;
