import React from "react";
import { Profile } from "../../../../../assets";
import { useNavigate, NavLink } from "react-router-dom";

function LowerOuterMsg({ user, index }) {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/inbox/vader`);
  // };
  return (
    <div>
      <NavLink
        to={`/inbox/${index}`} // Route to specific message
        className={({ isActive }) =>
          `flex items-center cursor-pointer px-5 ${
            isActive ? "bg-[#262626]" : " hover:bg-white/7"
          }`
        }
        // className="pt-3 pb-3 flex items-center cursor-pointer hover:bg-white/10 px-5"
      >
        <div>
          <img src={Profile} className="w-[55px] rounded-full m-2" alt="" />
        </div>
        <div className="flex flex-col ml-3 gap-0.5">
          <div className="text mt-1">Varun</div>
          <div className="text-sm text-white/70">
            You send an attachment.<span> • 16h</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default LowerOuterMsg;
