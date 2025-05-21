import React from "react";
import EmojiPicker from "emoji-picker-react";
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
        <footer className="mt-5">
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <img
                src={Notifications}
                className="w-[20px]"
                alt="Notifications"
              />
              <img src={CommentLogo} className="w-[20px]" alt="Comments" />
              <img src={Messages} className="w-[20px]" alt="Messages" />
            </div>
            <img src={Bookmark} className="w-[15px]" alt="Bookmark" />
          </div>
          <div className="mt-3 font-semibold">1,239 likes</div>
          <div className="mt-2">positivitykaizen</div>
          <div className="mt-1 text-white/50">View all 19 comments</div>
          <input
            type="text"
            className="pb-2 w-full mt-3 outline-none border-b border-white/30"
            placeholder="Add a comment..."
          />
        </footer>
      </div>
    </div>
  );
}

export default Middle;
