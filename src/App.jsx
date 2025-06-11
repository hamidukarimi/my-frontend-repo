import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import Users from "./components/Users/users";
import Register from "./components/register/Register";
import Profile from "./components/Profile/Profile";
import CreatePost from "./components/createPost/CreatePost";
import UserProfile from "./components/Profile/UserProfile";
import ProductInfo from "./components/Product-info/ProductInfo";
import Cart from "./components/Cart/Cart";
import Favorites from "./components/Favorites/Favorites";
import Users from "./components/Users/Users";
import CreateStory from "./components/createStory/CreateStory";
import ViewsStory from "./components/viewStory/ViewsStory";

const App = () => {
  console.log("Using API:", import.meta.env.VITE_API_BASE_URL);

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
      // a simple comment
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<Users />} />
            {/* <Route path="/product-info" element={<ProductInfo />} /> */}
            {/* <Route path="/product-info/:postId" element={<ProductInfo />} /> */}
            <Route path="/user-profile/:userId" element={<UserProfile />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/create-story" element={<CreateStory />} />
            <Route path="/stories/:id" element={<ViewsStory />} />
            <Route path="/products/:id" element={<ProductInfo />} />

            {/* <Route path="/users" element={<Users />} /> */}
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
