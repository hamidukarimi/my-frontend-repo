import React, { useState, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import BackNav from '../backNav/BackNav';


const CreateStory = () => {
  const [title, setTitle] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef();

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      setMessage('Please upload an image');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', imageFile);

    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');

      const response = await axios.post(
        'http://localhost:5000/api/stories/create',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage('Story created successfully!');
      setTitle('');
      setImageFile(null);
      setImagePreview(null);
    } catch (err) {
      console.error('Error creating story:', err);
      setMessage('Failed to create story');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <BackNav pageName="Create Story" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-lg mx-auto mt-6 p-6"
      >
        <div className="rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-bold">Create New Story</h2>
            <p className="opacity-90 mt-1">
              Share a moment that disappears in 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Image Upload */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-black">
                Story Image
              </label>
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
                className="w-full py-12 px-4 border-2 border-dashed border-black rounded-lg
                  hover:border-black hover:bg-gray-100 transition-all duration-200
                  flex flex-col items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-black"
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
                <span className="mt-4 text-sm text-black">
                  Click to upload image
                </span>
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
                      className="w-full h-64 object-cover rounded-lg border border-black"
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

            {/* Title Input */}
            <div>
              <label className="block text-sm font-medium text-black">
                Story Title
              </label>
              <input
                type="text"
                placeholder="Enter a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mt-1 p-2 border rounded"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              disabled={isLoading || !imageFile}
              className={`w-full bg-gradient-to-r from-black to-gray-800 text-white py-3.5 rounded-lg
                font-bold shadow-md hover:shadow-lg transition-all duration-200
                ${isLoading || !imageFile ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Uploading...
                </div>
              ) : (
                'Share Story'
              )}
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
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">
                  {message.includes('success') ? 'Success' : 'Error'}
                </h2>
                <p className="mb-4 text-gray-700">{message}</p>
                <button
                  onClick={() => setMessage('')}
                  className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                  OK
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CreateStory;
