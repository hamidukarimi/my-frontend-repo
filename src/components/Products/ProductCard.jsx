const BASE_URL = import.meta.env.VITE_BASE_URL;
import {
  faHeart,
  faEllipsisVertical,
  faTrash,
  faPenToSquare,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  image,
  title,
  description,
  price,
  prevPrice,
  postId, // the _id of this post
  likes = [], // array of like objects: [{ userId, name, profilePicture }, …]
  fetchPosts, // a function to re-fetch posts if you want to refresh after liking
  userName, // name of the post’s owner (optional, if you want to display it)
  userId,
  profilePicture,
  deletePost,
  updatePost,
  repostPost,
  postOwnerProfile,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes.length);

  // On mount, check if current user has already liked this post
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const currentUserId = storedUser?._id;
    if (likes.some((like) => like.userId === currentUserId)) {
      setIsLiked(true);
    }
  }, [likes]);

  const handleLike = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return alert("You must be logged in to like posts.");
    }

    try {
      const response = await fetch(
        `${BASE_URL}/api/users/posts/${postId}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        console.error("❌ Error liking post:", data.error || data.message);
        return;
      }

      // Toggle local state for immediate UI feedback
      if (isLiked) {
        setIsLiked(false);
        setLikesCount((prev) => prev - 1);
      } else {
        setIsLiked(true);
        setLikesCount((prev) => prev + 1);
      }

      // Optionally refresh the entire posts list from parent
      if (typeof fetchPosts === "function") {
        fetchPosts();
      }
    } catch (err) {
      console.error("❌ Network error liking post:", err);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  const [isfulldescription, setIsfulldescription] = useState(false);

  const toggleFullDescription = () => {
    if (isfulldescription) {
      setIsfulldescription(false);
    } else {
      setIsfulldescription(true);
    }
  };

  return (
    <div className="relative rounded-2xl shadow-sm overflow-hidden ">
      <button
        onClick={toggleBottomSheet}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
      >
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleBottomSheet}
        />
      )}

      {/* Bottom Sheet */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-md bg-white rounded-t-2xl shadow-xl overflow-hidden">
          {/* Handle indicator */}
          <div className="flex justify-center py-2">
            <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
          </div>

          {/* Options */}
          <div className="p-4 space-y-4">
            <button
              onClick={() => {
                updatePost();
                toggleBottomSheet();
              }}
              className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="text-blue-500 mr-3"
              />
              <span className="text-gray-800 font-medium">Update Post</span>
            </button>

            <button
              onClick={() => {
                deletePost();
                toggleBottomSheet();
              }}
              className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faTrash} className="text-red-500 mr-3" />
              <span className="text-gray-800 font-medium">Delete Post</span>
            </button>

            <button
              onClick={toggleBottomSheet}
              className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faFlag} className="text-orange-500 mr-3" />
              <span className="text-gray-800 font-medium">Report Post</span>
            </button>
          </div>

          {/* Cancel button */}
          <div className="p-4 border-t border-gray-100">
            <button
              onClick={toggleBottomSheet}
              className="w-full py-3 bg-gray-50 hover:bg-gray-100 rounded-lg font-medium text-gray-800 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full h-[200px] rounded-2xl  overflow-hidden bg-placeholderColor">
        <img className=" object-cover w-full h-full" src={image} />
      </div>
      <div className="flex  justify-between items-center py-2">
        <div className="flex items-center gap-2">
          <Link to={`/user-profile/${userId}`}>
            <div className="w-11 h-11 rounded-full overflow-hidden bg-red-200 ">
              <img
                className="w-full h-full object-cover"
                src={profilePicture}
              />
            </div>
          </Link>

          <div>
            <div className="flex items-center gap-2">
              <p className="font-bold ">{title}</p>
              <p>${price}</p>
              <p className="text-sm">$200</p>
            </div>
            <p
              onClick={toggleFullDescription}
              className={`${
                isfulldescription ? "line-clamp-none" : "line-clamp-1"
              }`}
            >
              {description}
            </p>
          </div>
        </div>

        <div className="   flex items-center justify-between">
          <button
            onClick={handleLike}
            className={` px-3 flex items-center gap-1  rounded-lg transition ${
              isLiked ? " text-red-500" : "  text-black"
            } hover:scale-105`}
          >
            <div className=" ">{likesCount}</div>
            <FontAwesomeIcon
              className="text-2xl"
              icon={isLiked ? faHeart : regularHeart}
            />
          </button>
        </div>
      </div>

      {/* Like Button & Posted By */}
    </div>
  );
};

export default ProductCard;
