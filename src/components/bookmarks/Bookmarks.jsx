

import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/Header";

const Bookmarks = () => {
  // State to check if the main course image has finished loading
  const [imageLoaded, setImageLoaded] = useState(false);
  const isLoading = !imageLoaded;
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const [bookmarks, setBookmarks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
  }, []);

  // Handle removing from bookmarks
  const handleRemoveFavorite = (cardToRemove) => {
    const updatedBookmarks = bookmarks.filter(
      (card) => card.id !== cardToRemove.id
    );
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  // Filter bookmarks based on search query. Here we use the title; you can extend this to other properties.
  const filteredBookmarks = bookmarks.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="px-5">
        <p className="text-3xl mt-20 mb-2 font-bold">Saved Courses</p>

        
          <input
            className="w-full p-5  py-2 mt-5 rounded-[30px] text-white text-xl bg-bodyColor border border-ourOrange outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
        

        <div className="py-12">
          {filteredBookmarks.length > 0 ? (
            filteredBookmarks.map((course) => (
              <div
                key={course.id}
                className="grid grid-cols-2 gap-1.5 relative mb-5"
              >
                <span
                  onClick={() => handleRemoveFavorite(course)}
                  className="absolute top-0 right-0 text-2xl text-ourOrange bg-bodyColor pl-3"
                >
                  <FontAwesomeIcon icon={faBookmark} />
                </span>
                <div className="w-[95%] h-[173px] object-cover bg-darkGray rounded-lg overflow-hidden">
                  {!imageLoaded && (
                    <Skeleton
                      height={200}
                      width="full"
                      baseColor="darkGray"
                      className=""
                    />
                  )}
                  {/* Render the image but hide it until it's loaded */}

                  <img
                    onLoad={handleImageLoad}
                    style={{ display: imageLoaded ? "block" : "none" }}
                    className="w-full h-full"
                    src={course.image}
                    alt={course.title}
                  />
                </div>
                <div className="w-full">
                  <p className="font-bold text-xl line-clamp-2">
                    {course.title}
                  </p>
                  <p className="text-[14px] my-2 line-clamp-3">
                    {course.description}
                  </p>
                  <p className="font-bold text-xl">{course.price}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-2xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <FontAwesomeIcon
                className="text-ourOrange text-4xl"
                icon={faBookmark}
              />
              <p className="mt-3 text-nowrap">
                {searchQuery
                  ? "No bookmarks match your search!"
                  : "No bookmarks yet!"}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
