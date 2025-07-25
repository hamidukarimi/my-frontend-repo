import React, { useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import axios from "axios";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faCircleArrowLeft,
  faRefresh,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/users/posts`);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/users/posts`);
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setMessage(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);



  if (loading) {
  return (
    <div className="w-full px-4 mt-3">
      <div className="grid grid-cols-1 gap-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="max-w-md w-full space-y-4 border rounded-2xl animate-pulse"
          >
            {/* Image placeholder */}
            <div className="w-full h-48 bg-gray-300 rounded-2xl"></div>

            {/* Content */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-11 h-11 rounded-full bg-gray-300"></div>

                {/* Title & price placeholders */}
                <div className="space-y-2">
                  <div className="w-16 h-4 bg-gray-300 rounded-md"></div>
                  <div className="w-32 h-4 bg-gray-300 rounded-md"></div>
                </div>
              </div>

              {/* Like button placeholder */}
              <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


  const products_1 = [
    {
      id: 0,
      image: `example.jpg`,
      title: "Lorem isp",
      price: "$399",
      prevPrice: "$499",
    },
    {
      id: 1,
      image: `example.jpg`,
      title: "Lorem isp",
      price: "$399",
      prevPrice: "$499",
    },
    {
      id: 0,
      image: `example.jpg`,
      title: "Lorem isp",
      price: "$399",
      prevPrice: "$499",
    },
    {
      id: 0,
      image: `example.jpg`,
      title: "Lorem isp",
      price: "$399",
      prevPrice: "$499",
    },
  ];

  // console.log("Posts data:", posts);

  return (
    <>
      <div className="px-4 my-5">
        <p className="font-semibold text-[18px]">COMPUTERS & ACCESSORIES</p>

        {/* card parent*/}
        <div className="my-5 grid grid-cols-1 gap-3">
          {posts.map((post, index) => (
            <ProductCard
              key={index}
              image={post.imagePath}
              title={post.name}
              description={post.description}
              price={post.price}
              prevPrice={post.prevPrice}
              postId={post._id}
              likes={post.likes}
              userName={post.userName}
              userId={post.userId}
              profilePicture={post.profilePicture}
              fetchPosts={fetchPosts}
            />
          ))}
        </div>

        {message && (
          <div className="text-center mt-3 ">
            <FontAwesomeIcon className="text-2xl" icon={faRotateRight} />
            <p>Something went wrong</p>
            <p>Please check your connection and try again.</p>
          </div>
        )}

        {/* add more products categories... */}
      </div>

      {/* second UI design */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
        >
          <img
            src={post.profilePicture}
            alt={post.userName}
            className="w-12 h-12 rounded-full mb-2"
          />
          <h3 className="font-bold">{post.userName}</h3>
          <p className="text-sm text-gray-500">{new Date(post.date).toLocaleString()}</p>
          <p className="mt-2">{post.description}</p>
          {post.imagePath && (
            <img
              // src={post.imagePath}
              src={`${BASE_URL}${post.imagePath}`}
              alt="Post"
              className="mt-3 rounded-md max-h-60 object-cover"
            />
          )}
        </div>
      ))}
    </div>  */}
    </>
  );
};

export default Products;
