import React from "react";
import {
  Profile,
  ellipsis,
  Card,
  Notifications,
  Messages,
  CommentLogo,
  Bookmark,
} from "../../assets";

function Middle() {
  // Create an array with 8 items (or more if you want)
  const users = Array(7).fill({
    name: "Varun",
    imgSrc: Profile,
  });

  return (
    <div className="px-20 mt-3 ">
      <nav>
        <ul className="flex gap-8">
          {users.map((users, index) => (
            <li key={index} className="text-xs text-center">
              <img
                src={users.imgSrc}
                className="rounded-full border-2 border-green-500"
                width="100px"
                alt={users.name}
              />
              {users.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-10 px-18 text-xs">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={Profile}
              className="w-[35px] rounded-full border-2 border-amber-600"
              alt="Profile"
            />
            <span>positivitykaizen</span>
            <span className="text-white/60">• 1d</span>
          </div>
          <img src={ellipsis} width="15px" alt="options" />
        </div>
        <div className="mt-1">
          <img src={Card} className="rounded-sm" alt="" />
        </div>
        <footer>
          <div className="flex gap-5 mt-5">
            <img src={Notifications} className="w-[20px]" />
            <img src={CommentLogo} className="w-[20px]" />
            <img src={Messages} className="w-[20px]" />
          </div>
          <img src={Bookmark} alt="" />
          <div className="mt-2">1,239 Likes</div>
        </footer>
      </div>
    </div>
  );
}

export default Middle;
