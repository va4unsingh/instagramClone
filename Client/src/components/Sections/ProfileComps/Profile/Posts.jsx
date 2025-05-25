import React, { useRef, useState, useEffect } from "react";
import { cameraIcon, PostFileUpload, Profile } from "../../../../assets";
import "./scrollBar.css";
import EmojiPicker from "emoji-picker-react";
import { EmojiIcon } from "../../../../assets";
import { closeModal, openModal } from "../../../../features/modals/modalSlice";
import { useDispatch, useSelector } from "react-redux";

function Posts() {
  const dispatch = useDispatch();
  const showFile = useSelector((state) => state.modal.showFile);

  // const [showFile, setShowFile] = useState(false);
  const fileInputRef = useRef(null);
  const [previewImages, setPreviewImages] = useState([]);

  const [tempPreviewImages, setTempPreviewImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [showPicker, setShowPicker] = useState(false);
  const textareaRef = useRef(null);
  const emojiRef = useRef(null);

  const [text, setText] = useState("");
  const charCount = text.length;

  const handleEmojiClick = (emojiData) => {
    const emoji = emojiData.emoji;
    const textarea = textareaRef.current;

    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const currentText = textarea.value;

      // Insert emoji at cursor position
      const newText =
        currentText.substring(0, start) + emoji + currentText.substring(end);

      // Update the text state
      setText(newText);

      // Refocus textarea and set cursor position after emoji
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + emoji.length, start + emoji.length);
      }, 0);
    }
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

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const showFilePopUp = () => {
    dispatch(openModal());
    // document.body.style.overflowY = "hidden";
  };

  useEffect(() => {
    document.body.style.overflowY = showFile ? "hidden" : "unset";
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [showFile]);

  const closePopup = () => {
    dispatch(closeModal());
    setTempPreviewImages([]); // Clear temporary preview
    setCurrentImageIndex(0); // clear index of preview image
    setText(""); // Clear text when closing popup
    setShowPicker(false); // Close emoji picker
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }
    // document.body.style.overflowY = "unset";
  };

  //   useEffect(() => {
  //   if (!showFile) setPreviewImage(null);
  // }, [showFile]);

  const clickAnyWhereClose = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length > 0) {
      const readers = imageFiles.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
      });
      Promise.all(readers).then((results) => {
        setTempPreviewImages((prev) => [...prev, ...results]);
      });
    }
    // if (file && file.type.startsWith("image/")) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setTempPreviewImage(reader.result); // Store in temp state
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  const handleShare = () => {
    if (tempPreviewImages.length > 0) {
      setPreviewImages((prev) => [...prev, ...tempPreviewImages]); // Move temp image to main
      setTempPreviewImages([]);
      setCurrentImageIndex(0); // clear index after sharing
      setText(""); // Clear text after sharing
      setShowPicker(false); // Close emoji picker
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }
    dispatch(closeModal()); // Close popup
    // document.body.style.overflowY = "unset";
  };

  const handleRemovePreview = (indexToRemove) => {
    setPreviewImages((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleRemoveTempImage = (indexToRemove) => {
    setTempPreviewImages((prev) => {
      const newImages = prev.filter((_, index) => index !== indexToRemove);
      if (currentImageIndex >= newImages.length && newImages.length > 0) {
        setCurrentImageIndex(newImages.length - 1);
      } else if (newImages.length === 0) {
        setCurrentImageIndex(0);
      }
      return newImages;
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < tempPreviewImages.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : tempPreviewImages.length - 1
    );
  };

  return (
    <div className="mt-15">
      {previewImages.length === 0 ? (
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
        <div className="px-36 -mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {previewImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-[400px] overflow-hidden  bg-black"
              >
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 text-sm text-white bg-black/60 px-2 py-1 rounded">
                  Post {index + 1}
                </div>
                <button
                  onClick={() => handleRemovePreview(index)}
                  className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        multiple
        accept="image/*"
      />

      {/* Popup Modal */}
      {showFile && (
        <div
          onClick={clickAnyWhereClose}
          className="bg-black/70 bg-opacity-70 inset-0 z-50 fixed flex items-center justify-center"
        >
          {tempPreviewImages.length === 0 ? (
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
              <div className="flex flex-1 overflow-hidden border-t text-white/10 ">
                <div className="w-[60%] h-full">
                  <img
                    src={tempPreviewImages}
                    alt="Preview"
                    className="w-full h-full object-cover border-r"
                  />
                </div>
                <div className="w-[40%] h-full bg-[#262626] p-4 text-white">
                  <div className="flex items-center gap-2">
                    <img src={Profile} className="rounded-full w-[25px]" />
                    <div className="text-sm font-semibold">vadergotbaddies</div>
                  </div>

                  <div className="mt-4">
                    <textarea
                      ref={textareaRef}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Write a caption..."
                      className="resize-none border-none outline-none w-full h-48 custom-scrollbar pr-4 "
                      // className="w-full h-32 bg-transparent border-none outline-none resize-none text-white placeholder-gray-400"
                    />
                  </div>

                  <div
                    ref={emojiRef}
                    className="flex items-center justify-between"
                  >
                    <button
                      className="text-lg cursor-pointer opacity-60 ml-1"
                      type="button"
                      onClick={() => setShowPicker((prev) => !prev)}
                    >
                      <img src={EmojiIcon} width="18px" alt="emoji" />
                    </button>

                    <div className="text-xs text-gray-500 ">
                      {charCount} character{charCount !== 1 ? "s" : ""}
                    </div>

                    {showPicker && (
                      <div className="absolute bottom-2 right-8 z-50 emoji-picker-no-header ">
                        <EmojiPicker
                          onEmojiClick={handleEmojiClick}
                          theme="dark"
                          emojiStyle="apple"
                          width={280}
                          height={180}
                          searchDisabled={true}
                          autoFocusSearch={false}
                          skinTonesDisabled={false}
                          lazyLoadEmojis={true}
                          previewConfig={{ showPreview: false }}
                        />
                      </div>
                    )}
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
