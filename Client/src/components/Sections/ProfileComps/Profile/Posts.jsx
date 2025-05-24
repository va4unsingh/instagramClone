import React, { useRef, useState } from "react";
import { cameraIcon, PostFileUpload, Profile } from "../../../../assets";

function Posts() {
  const [showFile, setShowFile] = useState(false);
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [tempPreviewImage, setTempPreviewImage] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const showFilePopUp = () => {
    setShowFile(true);
    document.body.style.overflowY = "hidden";
  };

  const closePopup = () => {
    setShowFile(false);
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
        setTempPreviewImage(reader.result); // Store in temp state
        setSelectedFile(file); // store actual file
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShare = () => {
    setPreviewImage(tempPreviewImage); // Move temp image to main preview
    setShowFile(false); // Close popup
    document.body.style.overflowY = "unset";
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
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <div
            onClick={(e) => setPreviewImage(null)}
            className="text white cursor-pointer"
          >
            Cross
          </div>
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-full max-h-[400px] object-contain"
          />
        </div>
      )}

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Popup Modal */}
      {showFile && (
        <div
          onClick={clickAnyWhereClose}
          className="bg-black/70 bg-opacity-70 inset-0 z-50 fixed flex items-center justify-center"
        >
          {!tempPreviewImage ? (
            <div className="relative rounded-lg h-[520px] w-[470px] bg-[#262626] flex flex-col overflow-hidden">
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
                  className="bg-[#0095f6] text-white px-3 py-1.5 text-sm rounded-md hover:bg-blue-600 font-semibold"
                >
                  Select from computer
                </button>
              </div>
            </div>
          ) : (
            <div className="relative rounded-lg h-[520px] w-[800px] bg-[#262626] flex flex-col overflow-hidden">
              <nav className="flex justify-between items-center bg-black py-3 text-white font-semibold rounded-t-lg px-4">
                <span className="flex ml-80">Create new post</span>
                <button
                  onClick={handleShare}
                  className="text-blue-500 hover:text-blue-400 font-semibold"
                >
                  Share
                </button>
              </nav>
              <div className="flex flex-1 overflow-hidden border-t text-white/30 ">
                <div className="w-[60%] h-full">
                  <img
                    src={tempPreviewImage}
                    alt="Preview"
                    className="w-full h-full object-cover border-r"
                  />
                </div>
                <div className="w-[40%] h-full bg-[#262626] p-4 text-white">
                  <div className="flex items-center gap-2">
                    <img src={Profile} className="rounded-full w-[30px]" />
                    <div>vadergotbaddies</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Posts;
