import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import Post from "../../../Etc/Post";

import { Profile, Notifications, NewLogo, Create } from "../../../../assets";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../../features/posts/postSlice";

function Middle() {
  // Get posts from Redux store
  const posts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();

  const stories = Array(4).fill({
    name: "Varun",
    imgSrc: Profile,
  });

  // Static fallback posts (you can keep these or remove them)
  // const staticPosts = [
  //   {
  //     id: 1,
  //     user: "va4unsingh",
  //     profile: Profile,
  //     image: Profile,
  //     time: "1h",
  //     likes: "143",
  //     commentsCount: "12",
  //   },
  //   {
  //     id: 2,
  //     user: "positivitykaizen",
  //     profile: Profile,
  //     image: Profile,
  //     time: "2d",
  //     likes: "200",
  //     commentsCount: "30",
  //   },
  //   {
  //     id: 3,
  //     user: "zenfocus",
  //     profile: Profile,
  //     image: Profile,
  //     time: "3h",
  //     likes: "321",
  //     commentsCount: "18",
  //   },
  // ];

  // Combine Redux posts with static posts (Redux posts first)
  const allPosts = [...posts]; // ...staticPosts

  return (
    <div className="xl:px-20">
      <nav className="fixed top-0 w-full bg-black flex justify-between items-center px-4 py-3 xl:hidden border-b border-white/20 xl:border-none">
        <img src={NewLogo} className="w-[90px]" />
        <div className="flex items-center gap-4 ">
          <img src={Create} className="w-[23px]" />
          <img src={Notifications} className="w-[23px]" />
        </div>
      </nav>

      {/* Stories */}
      <nav>
        <ul className="border-b border-white/20 xl:border-none flex gap-8 px-4 py-2 bg-white/5 xl:bg-transparent pt-15 xl:mt-0 xl:pt-0">
          {stories.map((user, index) => (
            <li key={index} className="text-xs cursor-pointer text-center">
              <img
                src={user.imgSrc}
                className="rounded-full border-2 border-green-500"
                width="60px"
                alt={user.name}
              />
              {user.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* Posts - Now using Redux posts + static posts */}

      {allPosts.map((post, index) => (
        <div key={post.id || index} className="relative">
          <Post
            user={
              typeof post.user === "string"
                ? post.user
                : post.user?.name || "Unknown User"
            }
            profile={post.profile || post.user?.profilePic}
            image={post.image || (post.images && post.images[0])}
            time={post.time || "now"}
            likes={post.likes || "0"}
            commentsCount={post.commentsCount || "0"}
            caption={post.caption}
          />
          <button
            onClick={() => dispatch(deletePost(post.id))}
            className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs z-10"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Middle;
