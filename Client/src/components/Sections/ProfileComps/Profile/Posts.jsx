import React, { useRef, useState, useEffect } from "react";
import { cameraIcon, PostFileUpload, Profile } from "../../../../assets";
import "./scrollBar.css";
import EmojiPicker from "emoji-picker-react";
import { EmojiIcon } from "../../../../assets";
import { closeModal, openModal } from "../../../../features/modals/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "../../../../features/posts/postSlice";

function Posts() {
  const dispatch = useDispatch();
  const showFile = useSelector((state) => state.modal.showFile);

  // 🔥 Read posts from Redux store instead of local state
  const reduxPosts = useSelector((state) => state.posts.data);
  // Filter posts for current user (you can modify this logic based on your user system)
  const userPosts = reduxPosts.filter(
    (post) =>
      post.user?.name === "vadergotbaddies" || post.user === "vadergotbaddies"
  );

  // const [showFile, setShowFile] = useState(false);
  const fileInputRef = useRef(null);
  // const [previewImages, setPreviewImages] = useState([]);

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
    // Reset the file input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // const handleShare = () => {
  //   if (tempPreviewImages.length > 0) {
  //     setPreviewImages((prev) => [...prev, ...tempPreviewImages]); // Move temp image to main
  //     setTempPreviewImages([]);
  //     setCurrentImageIndex(0); // clear index after sharing
  //     setText(""); // Clear text after sharing
  //     setShowPicker(false); // Close emoji picker
  //   }
  //   if (fileInputRef.current) {
  //     fileInputRef.current.value = ""; // Reset file input
  //   }
  //   dispatch(closeModal()); // Close popup
  //   // document.body.style.overflowY = "unset";
  // };

  const handleShare = () => {
    if (tempPreviewImages.length > 0) {
      const newPost = {
        id: Date.now(), // unique ID
        images: tempPreviewImages,
        caption: text,
        user: {
          name: "vadergotbaddies",
          profilePic: Profile,
        },
        createdAt: new Date().toISOString(),
      };

      dispatch(addPost(newPost)); // Add to Redux store

      // Clear temporary states
      // setPreviewImages((prev) => [...prev, ...tempPreviewImages]);
      setTempPreviewImages([]);
      setCurrentImageIndex(0);
      setText("");
      setShowPicker(false);
      fileInputRef.current.value = "";
      dispatch(closeModal());
    }
  };

  // const handleRemovePreview = (indexToRemove) => {
  //   setPreviewImages((prev) =>
  //     prev.filter((_, index) => index !== indexToRemove)
  //   );
  // };

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
      {userPosts.length === 0 ? (
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
            {userPosts.map((post, index) => (
              <div
                key={post.id}
                className="relative w-full h-[400px] overflow-hidden bg-black group"
              >
                <button
                  onClick={(e) => console.log("Post clicked:", post)}
                  className="h-[400px] relative"
                >
                  <img
                    src={post.images?.[0] || post.image}
                    alt={`Post ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-50"></div>
                </button>
                <div className="absolute top-2 left-2 text-sm text-white bg-black/60 px-2 py-1 rounded z-10">
                  Post {index + 1}
                </div>
                <button
                  onClick={() => dispatch(deletePost(post.id))}
                  className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs z-10"
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
          className="bg-black/70 inset-0 z-50 fixed flex items-center justify-center"
        >
          {tempPreviewImages.length === 0 ? (
            <div className="relative rounded-lg h-[520px] w-[470px] bg-[#262626] flex flex-col overflow-hidden">
              <nav className="flex justify-center bg-black py-3 text-white font-semibold rounded-t-lg relative">
                Create new post
                <button
                  onClick={closePopup}
                  className="absolute top-2 right-3 text-white hover:text-gray-300 text-2xl font-bold z-10"
                >
                  ×
                </button>
              </nav>

              <div className="flex-1 flex flex-col items-center justify-center text-white">
                <img src={PostFileUpload} alt="Upload" />
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
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleClick}
                    className="text-blue-500 hover:text-blue-400 font-semibold text-sm"
                  >
                    Add More
                  </button>
                </div>
                <span>Create new post</span>
                <button
                  onClick={handleShare}
                  className="text-blue-500 hover:text-blue-400 font-semibold"
                  disabled={tempPreviewImages.length === 0}
                >
                  Share
                </button>
              </nav>

              <div className="flex flex-1 overflow-hidden">
                <div className="w-[60%] h-full relative">
                  {tempPreviewImages.length > 0 && (
                    <>
                      <img
                        src={tempPreviewImages[currentImageIndex]}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />

                      {/* Image navigation */}
                      {tempPreviewImages.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="
                            absolute left-2 top-1/2 transform -translate-y-1/2
                            w-8 h-8 rounded-full bg-black/50 hover:bg-black/70
                            text-white flex items-center justify-center
                            leading-none "
                          >
                            <span className="text-xl">←</span>
                          </button>
                          <button
                            onClick={nextImage}
                            className="
                            absolute right-2 top-1/2 transform -translate-y-1/2
                            w-8 h-8 rounded-full bg-black/50 hover:bg-black/70
                            text-white flex items-center justify-center
                            leading-none "
                          >
                            <span className="text-xl">→</span>
                          </button>

                          {/* Image counter */}
                          <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                            {currentImageIndex + 1} / {tempPreviewImages.length}
                          </div>
                        </>
                      )}

                      {/* Remove current image button */}
                      <button
                        onClick={() => handleRemoveTempImage(currentImageIndex)}
                        className="absolute top-4 left-4 text-white rounded-full -mt-2 flex items-center justify-center hover:text-white/60 text-2xl"
                      >
                        ×
                      </button>
                    </>
                  )}
                </div>

                <div className="w-[40%] h-full bg-[#262626] p-4 text-white border-l border-gray-600">
                  <div className="flex items-center gap-2">
                    <img
                      src={Profile}
                      className="rounded-full w-[25px] h-[25px] object-cover"
                      alt="Profile"
                    />
                    <div className="text-sm font-semibold">vadergotbaddies</div>
                  </div>

                  <div className="mt-4">
                    <textarea
                      ref={textareaRef}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Write a caption..."
                      className="resize-none border-none outline-none w-full h-48 custom-scrollbar pr-4 bg-transparent text-white placeholder-gray-400"
                      maxLength={2200}
                    />
                  </div>

                  <div className="relative">
                    <div
                      ref={emojiRef}
                      className="flex items-center justify-between"
                    >
                      <button
                        className="text-lg cursor-pointer opacity-60 hover:opacity-100 ml-1"
                        type="button"
                        onClick={() => setShowPicker((prev) => !prev)}
                        aria-label="Add emoji"
                      >
                        <img src={EmojiIcon} width="18px" alt="emoji" />
                      </button>

                      <div className="text-xs text-gray-500">
                        {charCount}/2200
                      </div>
                    </div>

                    {showPicker && (
                      <div className="absolute bottom-8 right-0 z-50">
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

                  {/* Thumbnail strip for multiple images */}
                  {tempPreviewImages.length > 0 && (
                    <div className="mt-4">
                      <div className="text-xs text-gray-400 mb-2">
                        Images ({tempPreviewImages.length})
                      </div>
                      <div className="flex space-x-2 overflow-x-auto pb-2 custom-scrollbar">
                        {tempPreviewImages.map((image, index) => (
                          <div
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-12 h-12 rounded cursor-pointer border-2 ${
                              currentImageIndex === index
                                ? "border-blue-500"
                                : "border-transparent"
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover rounded "
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
