import React from "react";
import { NavLink } from "react-router-dom";
import { Bookmark, tableCell, userTag } from "../../../../assets";

function ProfileBottom() {
  return (
    <div>
      <div className="flex gap-14 justify-center ">
        <NavLink
          to="/profile/posts"
          className={({ isActive }) =>
            `flex items-center gap-1 cursor-pointer pb-2 text-sm transition-colors duration-500 ease-in-out ${
              isActive ? "border-t border-white text-white" : "text-white/50"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={tableCell}
                className={`w-[18px] mt-2.5 ${
                  isActive ? "opacity-100" : "opacity-50"
                }`}
                alt="tableCell"
              />
              <div className="mt-2">POSTS</div>{" "}
            </>
          )}
        </NavLink>
        <NavLink
          to="/profile/saved"
          className={({ isActive }) =>
            `flex items-center gap-1 cursor-pointer pb-2 text-sm transition-colors duration-500 ease-in-out ${
              isActive ? "border-t border-white text-white" : "text-white/50"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={Bookmark}
                className={`w-[12px] mt-2.5 ${
                  isActive ? "opacity-100" : "opacity-50"
                }`}
                alt="tableCell"
              />
              <div className="mt-2">SAVED</div>{" "}
            </>
          )}
        </NavLink>
        <NavLink
          to="/profile/tagged"
          className={({ isActive }) =>
            `flex gap-1 items-center cursor-pointer pb-2 text-sm transition-colors duration-500 ease-in-out ${
              isActive ? "border-t border-white text-white" : "text-white/50"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={userTag}
                className={`w-[18px] mt-2.5 ${
                  isActive ? "opacity-100" : "opacity-50"
                }`}
                alt="tableCell"
              />
              <div className="mt-2">TAGGED</div>
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default ProfileBottom;
