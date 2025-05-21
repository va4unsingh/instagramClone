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

function Middle() {
  // Create an array with 8 items (or more if you want)
  const users = Array(7).fill({
    name: "Varun",
    imgSrc: Profile,
  });

  const [showPicker, setShowPicker] = useState(false);
  const [comment, setComment] = useState("");

  const handleEmojiClick = (emojiData) => {
    setComment((prev) => prev + emojiData.emoji);
  };
  const emojiRef = useRef(null);

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
          {/* Relative wrapper for input and emoji button */}
          <div className="relative mt-3" ref={emojiRef}>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="pb-2 w-full mt-3 outline-none border-b border-white/30"
            />
            <button
              className="absolute right-2 bottom-1 text-lg cursor-pointer"
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
    </div>
  );
}

export default Middle;
