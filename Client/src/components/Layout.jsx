import { LeftSide } from "../components";
import { Outlet, useLocation } from "react-router-dom";

import React from "react";

function Layout() {
  const location = useLocation();
  const isInbox =
    location.pathname === "/inbox" || location.pathname.includes("/inbox/");
  return (
    <div className="flex min-h-screen bg-black text-white gap-2">
      <div
        className={` ${
          isInbox ? "xl:w-[5%] " : "xl:w-[16%] "
        }xl:border-r-1 xl:border-white/15 hidden xl:block`}
      >
        <LeftSide />
      </div>
      <div className={`${isInbox ? "xl:w-[95%]" : "xl:w-[84%]"}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
