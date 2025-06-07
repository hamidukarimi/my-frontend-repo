import React, { useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header/Header";
import Menubar from "../Menubar/Menubar";
import {
  faAngleDown,
  faEllipsis,
  faInfoCircle,
  faLink,
  faLocationDot,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import ProductCard from "../Products/ProductCard";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editingPostId, setEditingPostId] = useState(null); // which post is being edited
  const [newDescription, setNewDescription] = useState("");

  // ✅ Reusable function to fetch latest user data
  const fetchUserData = async () => {
    const storedUser = localStorage.getItem("user");
    const { _id } = JSON.parse(storedUser);

    try {
    const res = await fetch(`${BASE_URL}/api/users/${_id}`);
      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.error("❌ Error fetching user data:", err);
    }
  };

  // ✅ On mount, fetch user or redirect
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      navigate("/register");
      return;
    }

    fetchUserData();
  }, []);

  // ✅ Update post logic
  const updatePost = async (postId, updatedData) => {
    const token = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const userId = storedUser?._id;

    try {
      const response = await fetch(
        `${BASE_URL}/api/users/posts/${userId}/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("✅ Post updated:", result);
        fetchUserData(); // ✅ Refresh the UI after update
      } else {
        console.error("❌ Failed to update post:", result.message);
      }
    } catch (error) {
      console.error("❌ Error updating post:", error);
    }
  };

  // Improved handleDelete function in Profile.jsx
  const handleDelete = async (postId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${BASE_URL}/api/users/delete-post/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to delete post");
      }

      // Remove the deleted post from local state
      setUser((prev) => ({
        ...prev,
        posts: prev.posts.filter((p) => p._id !== postId),
      }));

      console.log("✅ Post deleted successfully");
    } catch (error) {
      console.error("Delete error:", error.message);
      alert("Failed to delete post.");
    }
  };

  if (!user)
    return (
      <div className="loading_page">
        <div className="spinner"></div>
      </div>
    );

  const {
    username,
    name,
    lastName,
    email,
    password,
    profilePicture,
    backgroundPicture,
    bio,
    gender,
    location,
    website,
    followers,
    following,
    posts,
  } = user;

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

  const cards = [
    {
      icon: `heart.svg`,
      title: "My Favorite",
      path: "",
    },
    {
      icon: `cart.png`,
      title: "My Cart",
      path: "",
    },
  ];

  return (
    <>
      <Header />
      <Menubar />
      <div className="px-4 py-6">
        <div className="flex  items-center justify-start gap-6">
          {/* profle image */}
          <div className="flex-shrink-0 w-[100px] h-[100px] bg-white rounded-full overflow-hidden">
            <img
              src={
                user.profilePicture
                  ? `${BASE_URL}${user.profilePicture}`
                  : "https://i.pinimg.com/736x/33/f8/26/33f8266681c946cd80de486c499fe992.jpg"
              }
              alt="Profile"
              className="object-cover"
            />
          </div>
          <div className="w-full h-full  flex flex-col gap-2 ">
            <p className="text-[24px] font-bold">{name}</p>
            <input
              className="w-full px-4 py-2 bg-white rounded-full outline-none"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* bio and website */}

        {/* <div className='text-center mt-3'>
        <p className='text-gray-500 '>{bio}</p>
        <p className='text-blue-500'>{website}</p>
        </div> */}

        {/* second section */}
        {/* <div className="my-9 flex gap-3">
          <div className="w-[126px] h-[126px] rounded-[16px] bg-white active:bg-[#f0f0f0] transition"></div>
          <div className="w-[126px] h-[126px] rounded-[16px] bg-white active:bg-[#f0f0f0] transition"></div>
          <div className="w-[126px] h-[126px] rounded-[16px] bg-white active:bg-[#f0f0f0] transition"></div>
        </div> */}

        <div className="">
          <p className="text-[20px] my-4 font-bold">Details</p>

          {details.map((item, index) => (
            <a key={index} href={item.path} target="_blank">
              <div className="text-xl flex items-center gap-3">
                <FontAwesomeIcon
                  className="text-gray-400 w-4"
                  icon={item.icon}
                />
                <span className="">{item.title}</span>
              </div>
            </a>
          ))}
        </div>

        <hr />

        {/* third section */}
        <div className="my-9 flex flex-col gap-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full h-[65px] overflow-hidden rounded-[16px] pl-5 flex justify-between items-center bg-white"
            >
              <div className="flex items-center gap-4">
                <span className="text-[33px]">
                  <img className="w-8" src={card.icon} />
                </span>
                <Link to={card.path}>
                  <span className="text-[20px] font-bold active:underline">
                    {card.title}
                  </span>
                </Link>
              </div>
              <Link to={card.path}>
                <span className="w-[50px] h-[76px] flex justify-center items-center text-xl hover:bg-[#e5e5e5] transition">
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* posts section */}

        <hr />
        <p className="text-[21px] my-4">Your posts</p>

        {/* post card */}

        <div className="grid grid-cols-1 gap-3">
          {/* () => setNewDescription(post.description) */}

          {[...user?.posts].reverse().map((post, index) => (
            <>
              {editingPostId === post._id && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md m-4">
                    <h2 className="text-xl font-semibold mb-4">Edit Post</h2>

                    <textarea
                      className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                      placeholder="Edit description"
                      rows={4}
                    />

                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => setEditingPostId(null)}
                        className="px-4 py-2  border border-black rounded  transition"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() => {
                          updatePost(post._id, { description: newDescription });
                          setEditingPostId(null);
                        }}
                        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <ProductCard
                key={index}
                image={`${BASE_URL}${post.imagePath}`}
                title={post.name}
                price={post.price}
                prevPrice={post.prevPrice}
                postId={post._id}
                likes={post.likes}
                userName={post.userName}
                profilePicture={`${BASE_URL}${user.profilePicture}`}
                deletePost={() => handleDelete(post._id)}
                updatePost={() => setEditingPostId(post._id)}
              />
            </>
          ))}
        </div>
      </div>

      {/* <button
  onClick={handleLogout}
  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
>
  Log Out
</button> */}

      <br />
      <br />
      <br />
    </>
  );
};

export default Profile;
