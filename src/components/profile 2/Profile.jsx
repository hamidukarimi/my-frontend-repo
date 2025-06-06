import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";

// ✅ Safe JSON Parse
const safeJSONParse = (data) => {
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

const Profile = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const rawUser = localStorage.getItem("user");
    const parsedUser = safeJSONParse(rawUser);

    // ✅ Check if parsedUser exists and has _id
    if (!parsedUser || !parsedUser._id) {
      setError("Please log in to view your profile.");
      setLoading(false);
      return;
    }

    fetch(`${BASE_URL}/api/users/${parsedUser._id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user data.");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error:", err);
        setError("Could not load user profile.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 text-lg font-semibold">
        {error}
      </div>
    );
  }

  if (!user) return null;

  const {
    name,
    lastName,
    profilePicture,
    backgroundPicture,
    bio,
    gender,
    location,
    website,
  } = user;

  const posts = [
    { id: 1, content: "Hello World", pinned: true },
    { id: 2, content: "Just chilling", pinned: false },
  ];

  const filteredPosts =
    activeTab === "pinned" ? posts.filter((post) => post.pinned) : posts;

  return (
    <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-60">
        <img
          src={
            backgroundPicture ||
            "https://i.pinimg.com/736x/33/f8/26/33f8266681c946cd80de486c499fe992.jpg"
          }
          alt="Background"
          className="w-full h-full object-cover"
        />
        <button className="absolute bottom-2 right-2 rounded-full p-2 shadow-md">
          <FiEdit2 className="w-5 h-5" />
        </button>
      </div>

      <div className="relative px-6 pb-6">
        <div className="absolute top-0 left-0 transform -translate-y-1/2 ml-6">
          <div className="relative">
            <img
              src={
                profilePicture ||
                "https://i.pinimg.com/736x/33/f8/26/33f8266681c946cd80de486c499fe992.jpg"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
            <button className="absolute bottom-0 right-0 rounded-full p-1 shadow-md">
              <FiEdit2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="mt-16 ml-44">
          <h1 className="text-2xl font-semibold">
            {name} {lastName}
          </h1>
          <p className="mt-2">{bio || "No bio yet"}</p>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <span className="font-medium mr-2">Location:</span>
            <span>{location || "Not specified"}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-2">Gender:</span>
            <span>{gender || "Not specified"}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-2">Website:</span>
            {website ? (
              <a
                href={website}
                className="text-red-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {website}
              </a>
            ) : (
              "Not provided"
            )}
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-700">
        <div className="flex border-b border-gray-800">
          <button
            className={`py-2 px-4 font-medium focus:outline-none ${
              activeTab === "all"
                ? "border-b-2 border-red-600 text-red-600"
                : ""
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`py-2 px-4 font-medium focus:outline-none ml-4 ${
              activeTab === "pinned"
                ? "border-b-2 border-red-600 text-red-600"
                : ""
            }`}
            onClick={() => setActiveTab("pinned")}
          >
            Pinned
          </button>
        </div>
        <div className="mt-4 space-y-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 rounded-lg shadow-sm bg-gray-50"
              >
                <p>{post.content}</p>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
