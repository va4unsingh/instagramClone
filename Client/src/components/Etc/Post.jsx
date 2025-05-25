import React, { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";

import {
  Profile,
  ellipsis,
  Card,
  Notifications,
  Messages,
  CommentLogo,
  Bookmark,
  EmojiIcon,
} from "../../assets";
import { NavLink } from "react-router-dom";

function Post({ user }) {
  // Create an array with 8 items (or more if you want)
  //   const users = Array(3).fill({
  //     name: "Varun",
  //     imgSrc: Profile,
  //   });

  const [showPicker, setShowPicker] = useState(false);
  const [comment, setComment] = useState("");
  const emojiRef = useRef(null);

  const handleEmojiClick = (emojiData) => {
    setComment((prev) => prev + emojiData.emoji);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="mt-5 xl:px-18 text-lg xl:text-xs">
      <div className="flex justify-between items-center px-3">
        <div className="flex items-center gap-2 ">
          <NavLink to="/profile">
            <img
              src={Profile}
              className="w-[45px] cursor-pointer rounded-full border-2 border-amber-600"
              alt="Profile"
            />
          </NavLink>
          <NavLink
            to="/profile"
            className="cursor-pointer hover:opacity-80 transition-opacity duration-20"
          >
            positivitykaizen
          </NavLink>
          <span className="text-white/60 cursor-pointer hover:opacity-80 transition-opacity duration-20">
            • 1d
          </span>
        </div>
        <img
          src={ellipsis}
          className="cursor-pointer hover:opacity-60 transition-opacity duration-20"
          width="15px"
          alt="options"
        />
      </div>
      <div className="mt-1 cursor-pointer">
        <img src={Card} className="rounded-sm" alt="" />
      </div>
      <footer className="mt-5 px-4 xl:px-0">
        <div className="flex justify-between items-center ">
          <div className="flex gap-5">
            <img
              src={Notifications}
              className="w-[22px] xl:w-[20px] cursor-pointer hover:opacity-60 transition-opacity duration-20"
              alt="Notifications"
            />
            <img
              src={CommentLogo}
              className="w-[22px] xl:w-[20px] cursor-pointer hover:opacity-60 transition-opacity duration-20"
              alt="Comments"
            />
            <img
              src={Messages}
              className="w-[22px] xl:w-[20px] cursor-pointer hover:opacity-60 transition-opacity duration-20"
              alt="Messages"
            />
          </div>
          <img
            src={Bookmark}
            className="w-[15px] cursor-pointer hover:opacity-60 transition-opacity duration-20"
            alt="Bookmark"
          />
        </div>
        <div className="mt-3 font-semibold cursor-pointer">1,239 likes</div>
        <div className="mt-2 cursor-pointer">positivitykaizen</div>
        <div className="mt-1 pb-3  text-white/50 cursor-pointer">
          View all 19 comments
        </div>
        {/* Relative wrapper for input and emoji button */}
        {/* Posts */}
        <div className="relative mt-3 hidden xl:block" ref={emojiRef}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="pb-2 w-full mt-3 outline-none border-b border-white/30"
          />
          <button
            className="absolute right-2 bottom-1 text-lg cursor-pointer hover:opacity-60 transition-opacity duration-20"
            type="button"
            onClick={() => setShowPicker((prev) => !prev)}
          >
            <img src={EmojiIcon} width="15px" alt="" />
          </button>

          {showPicker && (
            <div className="absolute bottom-full mb-2 right-0 z-50">
              <EmojiPicker
                onEmojiClick={handleEmojiClick}
                theme="dark"
                emojiStyle="apple"
                width={300}
                height={350}
                searchDisabled={false}
                skinTonesDisabled={false}
                lazyLoadEmojis={true}
                autoFocusSearch={false}
                previewConfig={{ showPreview: false }}
              />
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}

export default Post;
