import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import Users from "./components/Users/users";
import Register from "./components/register/Register";
import Profile from "./components/Profile/Profile";
import CreatePost from "./components/createPost/CreatePost";
import UserProfile from "./components/Profile/UserProfile";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define a named handler so we can properly remove it later
    const handleLoad = () => setLoading(false);

    // If the document is already loaded, set loading to false immediately.
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      // Otherwise, add the load event listener.
      window.addEventListener("load", handleLoad);
      // Cleanup the event listener when the component unmounts.
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user-profile/:userId" element={<UserProfile />} />
            <Route path="/create-post" element={<CreatePost />} />
            {/* <Route path="/users" element={<Users />} /> */}
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
