import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function KeyboardDm() {
    const [message, setMessage] = useState("");
  return (
    <div className="ml-[27.5%]">
      <NavLink to="/inbox/vader">
        <div>
          <div className="px-4 py-2.5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Message..."
              className="bg-black w-full border border-white/20 outline-none rounded-full py-1.5 px-8"
            />
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default KeyboardDm;
