import React, { useState, useRef } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BackNav from "../backNav/BackNav";

function CreatePost() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("You must be logged in to post.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await fetch(`${BASE_URL}/api/users/posts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const data = await response.json();
      setMessage("Post created successfully!");
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImageFile(null);
      setImagePreview(null);
      console.log("Updated user data:", data);
      setTimeout(() => navigate("/profile"), 1500);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const closeAlert = () => {
    setMessage("");
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <BackNav pageName="Create Post" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-lg mx-auto mt-6 p-6"
      >
        <div className="rounded-2xl shadow-xl overflow-hidden">
          {/* Header with branded dark gradient */}
          <div className="p-6">
            <h2 className="text-3xl font-bold">Create New Post</h2>
            <p className="opacity-90 mt-1">Share your item with the community</p>
          </div>
  
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Post Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-black">Post Name</label>
              <input
                type="text"
                placeholder="e.g. Vintage Leather Jacket"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-black rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-black
                           transition-all duration-200"
              />
            </div>
  
            {/* Description */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-black">Description</label>
              <textarea
                placeholder="Tell us about your item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-3 border border-black rounded-lg resize-y
                           focus:outline-none focus:ring-2 focus:ring-black
                           transition-all duration-200"
              />
            </div>
  
            {/* Price & Category */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-black">Price ($)</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-black rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-black
                             transition-all duration-200"
                />
              </div>
  
              <div className="space-y-1">
                <label className="block text-sm font-medium text-black">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-black rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-black
                             transition-all duration-200 appearance-none"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="fashion">Fashion</option>
                  <option value="technology">Technology</option>
                  <option value="phone/tablet">Phone/Tablet</option>
                  <option value="sports">Sports</option>
                  <option value="home-decor">Home Decor</option>
                  <option value="beauty">Beauty</option>
                  <option value="gaming">Gaming</option>
                  <option value="automotive">Automotive</option>
                  <option value="fitness">Fitness</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
  
            {/* Item Image Upload */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-black">Item Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="hidden"
              />
              <button
                type="button"
                onClick={triggerFileInput}
                className="w-full py-3 px-4 border-2 border-dashed border-black rounded-lg
                           hover:border-black hover:bg-gray-100 transition-all duration-200
                           flex flex-col items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="mt-2 text-sm text-black">Click to upload image</span>
              </button>
  
              {imagePreview && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3"
                >
                  <p className="text-sm text-black mb-2">Image Preview:</p>
                  <div className="relative group">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg border border-black"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview(null);
                        setImageFile(null);
                      }}
                      className="absolute top-2 right-2 bg-black text-white p-1 rounded-full
                                  transition-opacity duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
  
            {/* Create Post Button (dark gradient) */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3.5 rounded-lg
                         font-bold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Create Post
            </motion.button>
          </form>
        </div>
      </motion.div>
  
      {/* Success/Error Message Modal */}
      <AnimatePresence>
        {message && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rounded-xl bg-white p-6 max-w-sm w-full shadow-2xl"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  message.toLowerCase().includes("successfully")
                    ? "bg-gray-200 text-black"
                    : "bg-gray-200 text-black"
                }`}
              >
                {message.toLowerCase().includes("successfully") ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-bold text-center mb-2 text-black">
                {message.toLowerCase().includes("successfully") ? "Success!" : "Oops!"}
              </h3>
              <p className="text-black text-center mb-6">{message}</p>
              <button
                onClick={closeAlert}
                className="w-full py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
              >
                OK
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
  
}

export default CreatePost;