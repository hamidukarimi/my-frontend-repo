import React from "react";
import { FaRegUserCircle, FaSearch, FaBell, FaPlus, FaHome, FaUserFriends, FaVideo, FaStore, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function HomePage() {

  const navItems = [
    { icon: FaHome, path: "/" },
    { icon: FaVideo, path: "/videos" },
    { icon: FaStore, path: "/store" },
    { icon: FaBell, path: "/notifications" },
    { icon: FaRegUserCircle, path: "/profile", },
  ];


  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4  shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-[red] ">SociaLink</h1>
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search SociaLink..."
              className="pl-10 w-80 rounded-full py-2 px-4  focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-2.5 " />
          </div>
        </div>
        <div className="flex items-center gap-6">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const size = item.size || "text-xl";

        return (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `${size} cursor-pointer ${
                isActive ? "text-[red]" : ""
              } hover:text-[red]`
            }
          >
            <Icon />
          </NavLink>
        );
      })}
    </div>
      </header>

      {/* Main Layout */}
      <main className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <aside className="hidden md:block col-span-1 space-y-4">
          <div className=" rounded-2xl shadow p-4">
            <h2 className="font-semibold text-lg mb-4">Shortcuts</h2>
            <ul className="space-y-3 ">
              <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"><FaUserFriends /> Friends</li>
              <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"><FaUsers /> Groups</li>
              <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"><FaStore /> Marketplace</li>
              <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"><FaVideo /> Watch</li>
            </ul>
          </div>
        </aside>

        {/* Feed */}
        <section className="col-span-1 md:col-span-3 space-y-6">
          {/* Post box */}
          <div className=" rounded-2xl shadow p-5">
            <div className="flex gap-4 items-start">
              <FaRegUserCircle className="text-3xl " />
              <textarea
                className="w-full bg-black border rounded-xl p-3  focus:outline-none resize-none"
                rows="3"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <div className="flex justify-end mt-3">
              <button className="flex items-center gap-2 bg-[red] hover:bg-red-700  px-6 py-2 rounded-full transition">
                <FaPlus /> Post
              </button>
            </div>
          </div>

          {/* Example Posts */}
          {[1, 2, 3].map((post) => (
            <div key={post} className=" rounded-2xl shadow p-5">
              <div className="flex gap-4 items-center mb-3">
                <FaRegUserCircle className="text-3xl " />
                <div>
                  <p className="font-bold ">User {post}</p>
                  <p className="text-sm ">A few moments ago</p>
                </div>
              </div>
              <p className="">
                This is a modern looking post content for user {post}. You can imagine text, images, or videos here.
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
