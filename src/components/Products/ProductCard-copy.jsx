import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

const ProductCard = ({
  image,
  title,
  price,
  prevPrice,
  postId, // the _id of this post
  likes = [], // array of like objects: [{ userId, name, profilePicture }, …]
  fetchPosts, // a function to re-fetch posts if you want to refresh after liking
  userName, // name of the post’s owner (optional, if you want to display it)
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
        `https://my-backend-repo-x20l.onrender.com/api/users/posts/${postId}/like`,
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

  return (
    <div className="relative ">
      <div className=" w-full h-[171px]   overflow-hidden bg-placeholderColor">
        <img className=" object-cover w-full h-full" src={image} />
      </div>
      <div className="flex justify-between items-center py-2">
        <p className="text-[20px] font-semibold truncate whitespace-nowrap">
          {title}
        </p>
        <p className="text-[19px] font-semibold">
          ${price}
          <span className="text-[14px] font-normal text-gray-500 line-through">
            {prevPrice}
          </span>
        </p>
      </div>

      {/* Like Button & Posted By */}
      <div className="absolute top-2 left-2  flex items-center justify-between">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-2 py-0 rounded-xl transition ${
            isLiked
              ? "bg-[#ff000034] text-red-500"
              : "bg-[#8080803a]  text-white"
          } hover:scale-105`}
        >
          <FontAwesomeIcon icon={isLiked ? faHeart : regularHeart} />
          <span className="text-white">
            {likesCount} Like{likesCount !== 1 && "s"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
