import React, { useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faLink,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../header/Header";
import Menubar from "../Menubar/Menubar";
import ProductCard from "../Products/ProductCard";
import BackNav from "../backNav/BackNav";

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  // Fetch another user's data (no edit/delete)
  const fetchUserData = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/users/${userId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.error("❌ Error fetching user data:", err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  if (!user) {
    return (
      <div className="loading_page">
        <div className="spinner"></div>
      </div>
    );
  }

  const {
    name,
    lastName,
    profilePicture,
    bio,
    location,
    website,
    followers = [],
    following = [],
    posts = [],
  } = user;

  // Prepare the “Details” array exactly as before
  const details = [
    {
      icon: faInfoCircle,
      title: bio || <p className="italic text-gray-500">No bio</p>,
    },
    {
      icon: faLink,
      title: website || <p className="italic text-gray-500">No website</p>,
      path: website,
    },
    {
      icon: faLocationDot,
      title: location || <p className="italic text-gray-500">Not set</p>,
    },
  ];

  return (
    <>
      <BackNav pageName={`${name} ${lastName}`}/>
      <Menubar />

      <div className="px-4 py-6">
        <div className="flex items-center justify-start gap-4">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-[100px] h-[100px] bg-white rounded-full overflow-hidden">
            <img
              src={
                profilePicture
                  ? `${profilePicture}`
                  : "https://i.pinimg.com/736x/33/f8/26/33f8266681c946cd80de486c499fe992.jpg"
              }
              alt="Profile"
              className="object-cover"
            />
          </div>

          <div className="w-full h-full flex flex-col gap-2">
            <p className="text-[24px] font-bold">{name} {lastName}</p>
            <div className="flex items-center gap-3 text-gray-800 text-lg">
              <p>
                <strong>{followers.length}</strong> Followers
              </p>
              <p>
                <strong>{following.length}</strong> Following
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[20px] my-4 font-bold">Details</p>
          {details.map((item, index) => (
            <a
              key={index}
              href={item.path || "#"}
              target={item.path ? "_blank" : "_self"}
              rel="noreferrer"
            >
              <div className="text-xl flex items-center gap-3 mb-2">
                <FontAwesomeIcon
                  className="text-gray-400 w-4"
                  icon={item.icon}
                />
                <span>{item.title}</span>
              </div>
            </a>
          ))}
        </div>

        <hr className="my-6" />

        {/* POSTS SECTION */}
        <p className="text-[21px] my-4">Posts</p>
        <div className="grid grid-cols-1 gap-3">
          {[...posts].reverse().map((post) => (
            <ProductCard
              key={post._id}
              image={post.imagePath}
              title={post.name}
              price={post.price}
              prevPrice={post.prevPrice}
              postId={post._id}
              likes={post.likes}
              userName={post.userName}
              profilePicture={profilePicture}
              // No deletePost or updatePost for someone else's posts
            />
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
    </>
  );
};

export default UserProfile;
