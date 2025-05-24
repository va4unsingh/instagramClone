import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import { EmojiIcon } from "../../../../assets";

function KeyboardDm() {
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const emojiRef = useRef(null);

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
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

  const handleSend = () => {
    if (message.trim() !== "") {
      // Handle send logic here
      console.log("Sending message:", message);
      setMessage(""); // Clear message after sending
    }
  };

  return (
    <div className="ml-[27.5%]">
      <NavLink to="/inbox/vader">
        <div className="relative">
          <div className="px-4 py-2.5">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              className="bg-black w-full border border-white/20 outline-none rounded-full py-2 px-9 pr-20"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />

            {message.trim() !== "" && (
              <button
                className="absolute right-8 top-1/2 -translate-y-1/2 text-[#0095f6] text-sm font-medium"
                onClick={handleSend}
              >
                Send
              </button>
            )}

            <div
              ref={emojiRef}
              className="absolute left-6 bottom-0.5 -translate-y-1/2"
            >
              <button
                className="text-lg cursor-pointer hover:opacity-60 transition-opacity duration-200"
                type="button"
                onClick={() => setShowPicker((prev) => !prev)}
              >
                <img src={EmojiIcon} width="20px" alt="emoji" />
              </button>

              {showPicker && (
                <div className="absolute bottom-8 mb-2 left-0 z-50">
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
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default KeyboardDm;
