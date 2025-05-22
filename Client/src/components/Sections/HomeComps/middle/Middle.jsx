import React, { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import Post from "../../../Etc/Post";

import { Profile, Notifications, NewLogo, Create } from "../../../../assets";

function Middle() {
  // Create an array with 8 items (or more if you want)
  const users = Array(4).fill({
    name: "Varun",
    imgSrc: Profile,
  });

  return (
    <div className="xl:px-20">
      <nav className="fixed top-0 w-full bg-black flex justify-between items-center px-4 py-3 xl:hidden border-b border-white/20 xl:border-none">
        <img src={NewLogo} className="w-[90px]" />
        <div className="flex items-center gap-4 ">
          <img src={Create} className="w-[23px]" />
          <img src={Notifications} className="w-[23px]" />
        </div>
      </nav>
      <nav>
        <ul className="border-b border-white/20 xl:border-none flex gap-8 px-4 py-2 bg-white/5 xl:bg-transparent pt-15 xl:mt-0 xl:pt-0">
          {users.map((users, index) => (
            <li key={index} className="text-xs cursor-pointer text-center">
              <img
                src={users.imgSrc}
                className="rounded-full border-2 border-green-500"
                width="60px"
                alt={users.name}
              />
              {users.name}
            </li>
          ))}
        </ul>
      </nav>
      {/* Post  */}
      {users.map((user, index) => (
        <Post key={index} user={user} />
      ))}
    </div>
  );
}

export default Middle;
