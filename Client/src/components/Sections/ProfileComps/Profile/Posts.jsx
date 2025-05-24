import React, { useRef, useState } from "react";
import { cameraIcon, PostFileUpload } from "../../../../assets";

function Posts() {
  const [showFile, setShowFile] = useState(false);
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const showFilePopUp = () => {
    setShowFile(true);
    document.body.style.overflowY = "hidden";
  };

  const closePopup = () => {
    setShowFile(false);
    // setPreviewImage(null); // Clear image on close
    document.body.style.overflowY = "unset";
  };

  const clickAnyWhereClose = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-15">
      {!previewImage ? (
        <>
          <div className="flex justify-center">
            <div className="cursor-pointer h-[60px] w-[60px] border-2 rounded-full items-center justify-center flex">
              <img src={cameraIcon} className="w-[35px]" alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-2">
            <div className="font-extrabold text-2xl">Share Photos</div>
            <div className="text-sm mt-2">
              When you share photos, they will appear on your profile.
            </div>

            <button
              onClick={showFilePopUp}
              className="text-blue-500 font-semibold text-sm mt-4 cursor-pointer"
            >
              Share your first photo
            </button>

            <div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-full max-h-[400px] object-contain"
          />
        </div>
      )}

      {/* start  */}
      {showFile && (
        <div
          onClick={clickAnyWhereClose}
          className="bg-black/50 bg-opacity-60  inset-0 z-50 fixed flex items-center justify-center "
        >
          <div className="relative rounded-lg h-[500px] w-[450px] bg-[#262626] flex flex-col mt-10">
            <nav className="flex justify-center bg-black py-3 text-white font-semibold rounded-t-lg">
              Create new post
              <button
                onClick={closePopup}
                className="absolute top-2 right-3 text-white hover:text-gray-300 text-2xl font-bold z-10"
              >
                ×
              </button>
            </nav>

            <div className="flex-1 flex flex-col items-center justify-center text-white">
              <img src={PostFileUpload} alt="" />
              <div className="mb-4 text-lg">Drag photos and videos here</div>
              <button
                onClick={handleClick}
                className="bg-[#0095f6] text-white px-6 py-2 text-sm rounded-md hover:bg-blue-500 font-semibold transition-colors"
              >
                Select from computer
              </button>
            </div>
          </div>
        </div>
      )}
      {/* end  */}
    </div>
  );
}

export default Posts;
