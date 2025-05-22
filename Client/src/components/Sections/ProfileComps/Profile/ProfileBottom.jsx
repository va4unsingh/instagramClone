import React, { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Bookmark, tableCell, userTag } from "../../../../assets";

function ProfileBottom() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/profile") {
      navigate("/profile/posts", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      <div className="flex gap-14 justify-center ">
        <NavLink
          to="/profile/posts"
          className={({ isActive }) =>
            `flex items-center gap-1 cursor-pointer pb-2 text-xs transition-colors duration-500 ease-in-out ${
              isActive || location.pathname === "/profile"
                ? "border-t border-white text-white"
                : "text-white/50"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={tableCell}
                className={`w-[18px] mt-3.5 ${
                  isActive || location.pathname === "/profile"
                    ? "opacity-100"
                    : "opacity-50"
                }`}
                alt="tableCell"
              />
              <div className="mt-3">POSTS</div>{" "}
            </>
          )}
        </NavLink>
        <NavLink
          to="/profile/saved"
          className={({ isActive }) =>
            `flex items-center gap-1 cursor-pointer pb-2 text-xs transition-colors duration-500 ease-in-out ${
              isActive ? "border-t border-white text-white" : "text-white/50"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={Bookmark}
                className={`w-[12px] mt-4 ${
                  isActive ? "opacity-100" : "opacity-50"
                }`}
                alt="tableCell"
              />
              <div className="mt-3">SAVED</div>
            </>
          )}
        </NavLink>
        <NavLink
          to="/profile/tagged"
          className={({ isActive }) =>
            `flex gap-1 items-center cursor-pointer pb-2 text-xs transition-colors duration-500 ease-in-out ${
              isActive ? "border-t border-white text-white" : "text-white/50"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={userTag}
                className={`w-[18px] mt-3.5 ${
                  isActive ? "opacity-100" : "opacity-50"
                }`}
                alt="tableCell"
              />
              <div className="mt-3">TAGGED</div>
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default ProfileBottom;
