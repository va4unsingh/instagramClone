import React from "react";
import { Card } from "../../../../assets";

function Saved() {
  return (
    <div className="mt-10 px-38">
      <div className="flex justify-between">
        <div className="text-xs text-white/60">
          Only you can see what you've saved
        </div>
        <button className="text-sm text-blue-500 font-semibold">
          + New Collection
        </button>
      </div>
      <div className="grid grid-cols-2 w-fit mt-3">
        <img
          src={Card}
          className="w-[130px] h-[130px] object-cover border border-white/20 rounded-tl-xs"
          alt=""
        />
        <img
          src={Card}
          className="w-[130px] h-[130px] object-cover border border-white/20 rounded-tr-sm"
          alt=""
        />

        {/* Bottom row with shared hover effect */}
        <div className="group cursor-pointer col-span-2 grid grid-cols-2">
          {/* Bottom left with text */}
          <div className="relative">
            <img
              src={Card}
              className="w-[130px] h-[130px] object-cover border border-white/20 rounded-bl-sm transition-all duration-300 group-hover:brightness-75"
              alt=""
            />
            {/* Text at bottom left corner */}
            <div className="absolute bottom-2 left-2">
              <span className="text-white text-sm font-semibold bg-black/70 px-2 py-1 rounded">
                Your Text
              </span>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-sm"></div>
          </div>

          {/* Bottom right */}
          <div className="relative">
            <img
              src={Card}
              className="w-[130px] h-[130px] object-cover border border-white/20 rounded-br-sm transition-all duration-300 group-hover:brightness-75"
              alt=""
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saved;
